interface TimeInput {
  id: string;
  nome: string;
  grupoId: string;
}

interface JogoInput {
  id: string;
  grupoId: string;
  timeIdCasa: string;
  timeIdFora: string;
  golsCasa: number | null;
  golsFora: number | null;
  status: 'PROXIMO' | 'CONCLUIDO';
}

export interface ClassificacaoTime {
  timeId: string;
  nome: string;
  pontos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;
  saldoGols: number;
}

export function calcularClassificacao(times: TimeInput[], jogos: JogoInput[]): ClassificacaoTime[] {
  const jogosConcluidos = jogos.filter((j) => j.status === 'CONCLUIDO' && j.golsCasa !== null && j.golsFora !== null);

  // Monta pontuação de cada time
  const tabela = new Map<string, ClassificacaoTime>();
  for (const time of times) {
    tabela.set(time.id, {
      timeId: time.id,
      nome: time.nome,
      pontos: 0,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      golsPro: 0,
      golsContra: 0,
      saldoGols: 0,
    });
  }

  for (const jogo of jogosConcluidos) {
    const casa = tabela.get(jogo.timeIdCasa);
    const fora = tabela.get(jogo.timeIdFora);
    if (!casa || !fora) continue;

    const golsCasa = jogo.golsCasa!;
    const golsFora = jogo.golsFora!;

    casa.golsPro += golsCasa;
    casa.golsContra += golsFora;
    fora.golsPro += golsFora;
    fora.golsContra += golsCasa;

    if (golsCasa > golsFora) {
      casa.vitorias += 1;
      casa.pontos += 3;
      fora.derrotas += 1;
    } else if (golsCasa < golsFora) {
      fora.vitorias += 1;
      fora.pontos += 3;
      casa.derrotas += 1;
    } else {
      casa.empates += 1;
      fora.empates += 1;
      casa.pontos += 1;
      fora.pontos += 1;
    }
  }

  for (const time of tabela.values()) {
    time.saldoGols = time.golsPro - time.golsContra;
  }

  // ordena aplicando os critérios de desempate na ordem certa
  const lista = Array.from(tabela.values());

  return lista.sort((a, b) => {
    if (a.pontos !== b.pontos) return b.pontos - a.pontos;

    const confrontoDireto = compararConfrontoDireto(a, b, jogosConcluidos);
    if (confrontoDireto !== 0) return confrontoDireto;

    if (a.saldoGols !== b.saldoGols) return b.saldoGols - a.saldoGols;

    return b.golsPro - a.golsPro;
  });
}

// desempate por confronto direto: pontos, depois saldo, depois gols marcados NESSE jogo específico
function compararConfrontoDireto(a: ClassificacaoTime, b: ClassificacaoTime, jogos: JogoInput[]): number {
  const jogoEntreEles = jogos.find(
    (j) =>
      (j.timeIdCasa === a.timeId && j.timeIdFora === b.timeId) ||
      (j.timeIdCasa === b.timeId && j.timeIdFora === a.timeId),
  );

  if (!jogoEntreEles) return 0; // não jogaram entre si , critério não se aplica

  const golsA = jogoEntreEles.timeIdCasa === a.timeId ? jogoEntreEles.golsCasa! : jogoEntreEles.golsFora!;
  const golsB = jogoEntreEles.timeIdCasa === b.timeId ? jogoEntreEles.golsCasa! : jogoEntreEles.golsFora!;

  if (golsA !== golsB) return golsB - golsA; // quem venceu o confronto direto fica na frente
  return 0; // empataram entre si cai pro próximo critério
}