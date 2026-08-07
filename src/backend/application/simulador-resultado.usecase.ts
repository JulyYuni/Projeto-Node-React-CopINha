import { prisma } from "@/libs/prisma";
import z from "zod";

export interface TimeClassificacaoSimulada {
    timeId: string;
    nomeTime?: string;
    pontos: number;
    jogos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    golsPro: number;
    golsContra: number;
    saldoGols: number;
}

export const simularResultadosBodySchema = z.object({
    grupoId: z.string().uuid(),
    jogosSimulados: z.array(
        z.object({
            timeIdCasa: z.string().uuid(),
            timeIdFora: z.string().uuid(),
            golsCasa: z.number().int().nonnegative(),
            golsFora: z.number().int().nonnegative(),
        })
    ).min(1),
});

export type SimularResultadosBodyInput = z.infer<typeof simularResultadosBodySchema>;

export class SimularResultadosGrupoUseCase {
    async execute(input: SimularResultadosBodyInput): Promise<TimeClassificacaoSimulada[]> {
        const { grupoId, jogosSimulados } = input;

        const jogosReaisEncerrados = await prisma.jogo.findMany({
            where: {
                grupoId,
                status: "CONCLUIDO",
            },
            select: {
                timeIdCasa: true,
                timeIdFora: true,
                golsCasa: true,
                golsFora: true,
            },
        });

        const timesDoGrupo = await prisma.time.findMany({
            where: { grupoId },
            select: { id: true, nome: true },
        });

        if (timesDoGrupo.length === 0) {
            throw new Error("Nenhum time encontrado para este grupo.");
        }

        const tabelaMap = new Map<string, TimeClassificacaoSimulada>();

        for (const time of timesDoGrupo) {
            tabelaMap.set(time.id, {
                timeId: time.id,
                nomeTime: time.nome,
                pontos: 0,
                jogos: 0,
                vitorias: 0,
                empates: 0,
                derrotas: 0,
                golsPro: 0,
                golsContra: 0,
                saldoGols: 0,
            });
        }

        const processarPartida = (
            timeCasaId: string,
            timeForaId: string,
            golsCasa: number,
            golsFora: number
        ) => {
            const casa = tabelaMap.get(timeCasaId);
            const fora = tabelaMap.get(timeForaId);

            if (!casa || !fora) return;

            casa.jogos += 1;
            fora.jogos += 1;

            casa.golsPro += golsCasa;
            casa.golsContra += golsFora;

            fora.golsPro += golsFora;
            fora.golsContra += golsCasa;

            if (golsCasa > golsFora) {
                casa.pontos += 3;
                casa.vitorias += 1;
                fora.derrotas += 1;
            } else if (golsCasa < golsFora) {
                fora.pontos += 3;
                fora.vitorias += 1;
                casa.derrotas += 1;
            } else {
                casa.pontos += 1;
                fora.pontos += 1;
                casa.empates += 1;
                fora.empates += 1;
            }

            casa.saldoGols = casa.golsPro - casa.golsContra;
            fora.saldoGols = fora.golsPro - fora.golsContra;
        };

        for (const jogo of jogosReaisEncerrados) {
            if (jogo.golsCasa !== null && jogo.golsFora !== null) {
                processarPartida(jogo.timeIdCasa, jogo.timeIdFora, jogo.golsCasa, jogo.golsFora);
            }
        }

        for (const jogo of jogosSimulados) {
            processarPartida(jogo.timeIdCasa, jogo.timeIdFora, jogo.golsCasa, jogo.golsFora);
        }

        return Array.from(tabelaMap.values()).sort((a, b) => {
            if (b.pontos !== a.pontos) return b.pontos - a.pontos;
            if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
            if (b.saldoGols !== a.saldoGols) return b.saldoGols - a.saldoGols;
            return b.golsPro - a.golsPro;
        });
    }
}