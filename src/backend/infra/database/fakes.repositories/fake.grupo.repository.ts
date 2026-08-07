import type { CreateGrupoData, GrupoRepository, UpdateGrupoData } from "@/domain/repositories/grupo.repository";
import type { Grupo, GrupoComTimesEJogos } from "@/domain/interfaces/grupo"

export class FakeGrupoRepository implements GrupoRepository {
  private grupos: GrupoComTimesEJogos[] = [
    {
      id: "grupo-a",
      nome: "Grupo A",
      createdAt: new Date(),
      times: [
        {
          id: "bra",
          nome: "Brasil",
          sigla: "BRA",
          bandeira: "https://flagcdn.com/w320/br.png",
          grupoId: "grupo-a",
          vitorias: 3,
          empates: 0,
          derrotas: 0,
          golsPro: 8,
          golsContra: 1,
          pontos: 9,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fra",
          nome: "França",
          sigla: "FRA",
          bandeira: "https://flagcdn.com/w320/fr.png",
          grupoId: "grupo-a",
          vitorias: 2,
          empates: 0,
          derrotas: 1,
          golsPro: 5,
          golsContra: 3,
          pontos: 6,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "jpn",
          nome: "Japão",
          sigla: "JPN",
          bandeira: "https://flagcdn.com/w320/jp.png",
          grupoId: "grupo-a",
          vitorias: 1,
          empates: 0,
          derrotas: 2,
          golsPro: 2,
          golsContra: 5,
          pontos: 3,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "cmr",
          nome: "Camarões",
          sigla: "CMR",
          bandeira: "https://flagcdn.com/w320/cm.png",
          grupoId: "grupo-a",
          vitorias: 0,
          empates: 0,
          derrotas: 3,
          golsPro: 1,
          golsContra: 7,
          pontos: 0,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      jogos: [],
    },
    {
      id: "grupo-b",
      nome: "Grupo B",
      createdAt: new Date(),
      times: [
        {
          id: "arg",
          nome: "Argentina",
          sigla: "ARG",
          bandeira: "https://flagcdn.com/w320/ar.png",
          grupoId: "grupo-b",
          vitorias: 2,
          empates: 1,
          derrotas: 0,
          golsPro: 6,
          golsContra: 2,
          pontos: 7,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "esp",
          nome: "Espanha",
          sigla: "ESP",
          bandeira: "https://flagcdn.com/w320/es.png",
          grupoId: "grupo-b",
          vitorias: 1,
          empates: 2,
          derrotas: 0,
          golsPro: 4,
          golsContra: 2,
          pontos: 5,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mar",
          nome: "Marrocos",
          sigla: "MAR",
          bandeira: "https://flagcdn.com/w320/ma.png",
          grupoId: "grupo-b",
          vitorias: 1,
          empates: 1,
          derrotas: 1,
          golsPro: 3,
          golsContra: 3,
          pontos: 4,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "can",
          nome: "Canadá",
          sigla: "CAN",
          bandeira: "https://flagcdn.com/w320/ca.png",
          grupoId: "grupo-b",
          vitorias: 0,
          empates: 0,
          derrotas: 3,
          golsPro: 1,
          golsContra: 7,
          pontos: 0,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      jogos: [],
    },
    {
      id: "grupo-c",
      nome: "Grupo C",
      createdAt: new Date(),
      times: [
        {
          id: "ger",
          nome: "Alemanha",
          sigla: "GER",
          bandeira: "https://flagcdn.com/w320/de.png",
          grupoId: "grupo-c",
          vitorias: 2,
          empates: 1,
          derrotas: 0,
          golsPro: 7,
          golsContra: 3,
          pontos: 7,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "uru",
          nome: "Uruguai",
          sigla: "URU",
          bandeira: "https://flagcdn.com/w320/uy.png",
          grupoId: "grupo-c",
          vitorias: 1,
          empates: 1,
          derrotas: 1,
          golsPro: 4,
          golsContra: 4,
          pontos: 4,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "kor",
          nome: "Coreia do Sul",
          sigla: "KOR",
          bandeira: "https://flagcdn.com/w320/kr.png",
          grupoId: "grupo-c",
          vitorias: 1,
          empates: 0,
          derrotas: 2,
          golsPro: 3,
          golsContra: 5,
          pontos: 3,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "usa",
          nome: "Estados Unidos",
          sigla: "USA",
          bandeira: "https://flagcdn.com/w320/us.png",
          grupoId: "grupo-c",
          vitorias: 0,
          empates: 2,
          derrotas: 1,
          golsPro: 2,
          golsContra: 4,
          pontos: 2,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      jogos: [],
    },
    {
      id: "grupo-d",
      nome: "Grupo D",
      createdAt: new Date(),
      times: [
        {
          id: "por",
          nome: "Portugal",
          sigla: "POR",
          bandeira: "https://flagcdn.com/w320/pt.png",
          grupoId: "grupo-d",
          vitorias: 3,
          empates: 0,
          derrotas: 0,
          golsPro: 9,
          golsContra: 2,
          pontos: 9,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ned",
          nome: "Holanda",
          sigla: "NED",
          bandeira: "https://flagcdn.com/w320/nl.png",
          grupoId: "grupo-d",
          vitorias: 2,
          empates: 0,
          derrotas: 1,
          golsPro: 6,
          golsContra: 4,
          pontos: 6,
          classificado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "sen",
          nome: "Senegal",
          sigla: "SEN",
          bandeira: "https://flagcdn.com/w320/sn.png",
          grupoId: "grupo-d",
          vitorias: 1,
          empates: 0,
          derrotas: 2,
          golsPro: 4,
          golsContra: 6,
          pontos: 3,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mex",
          nome: "México",
          sigla: "MEX",
          bandeira: "https://flagcdn.com/w320/mx.png",
          grupoId: "grupo-d",
          vitorias: 0,
          empates: 0,
          derrotas: 3,
          golsPro: 1,
          golsContra: 8,
          pontos: 0,
          classificado: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      jogos: [],
    },
  ];

  async create(data: CreateGrupoData): Promise<Grupo> {
    const novoGrupo: GrupoComTimesEJogos = {
      id: `grupo-${Date.now()}`,
      nome: data.nome,
      createdAt: new Date(),
      times: [],
      jogos: [],
    };

    this.grupos.push(novoGrupo);
    return novoGrupo;
  }

  async findAll(): Promise<Grupo[]> {
    return this.grupos.map(({ times, jogos, ...grupo }) => grupo);
  }

  async findById(id: string): Promise<Grupo | null> {
    const grupo = this.grupos.find((item) => item.id === id);
    if (!grupo) return null;

    const { times, jogos, ...grupoBase } = grupo;
    return grupoBase;
  }

  async findByNome(nome: string): Promise<Grupo | null> {
    const grupo = this.grupos.find(
      (item) => item.nome.toLowerCase() === nome.toLowerCase()
    );
    if (!grupo) return null;

    const { times, jogos, ...grupoBase } = grupo;
    return grupoBase;
  }

  async findByIdComTimesEJogos(id: string): Promise<GrupoComTimesEJogos | null> {
    const grupo = this.grupos.find((item) => item.id === id);
    return grupo ?? null;
  }

  async update(id: string, data: UpdateGrupoData): Promise<Grupo> {
    const index = this.grupos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Grupo não encontrado");
    }

    this.grupos[index] = {
      ...this.grupos[index],
      ...data,
    };

    const { times, jogos, ...grupoAtualizado } = this.grupos[index];
    return grupoAtualizado;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.grupos.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }

    this.grupos.splice(index, 1);
    return true;
  }
}