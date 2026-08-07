import type { Time } from "@/domain/interfaces/time";
import type {
  CreateTimeData,
  TimeRepository,
  UpdateStandingTimeData,
  UpdateTimeData,
} from "@/domain/repositories/time.repository";

export class FakeTimeRepository implements TimeRepository {
  private times: Time[] = [
    // Grupo A
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

    // Grupo B
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

    // Grupo C
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

    // Grupo D
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
  ];

  async create(data: CreateTimeData): Promise<Time> {
    const novoTime: Time = {
      id: `time-${Date.now()}`,
      nome: data.nome,
      sigla: data.sigla,
      bandeira: data.bandeira,
      grupoId: data.grupoId,
      vitorias: data.vitorias ?? 0,
      empates: data.empates ?? 0,
      derrotas: data.derrotas ?? 0,
      golsPro: data.golsPro ?? 0,
      golsContra: data.golsContra ?? 0,
      pontos: data.pontos ?? 0,
      classificado: data.classificado ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.times.push(novoTime);
    return novoTime;
  }

  async findAll(): Promise<Time[]> {
    return this.times;
  }

  async findById(id: string): Promise<Time | null> {
    const time = this.times.find((item) => item.id === id);
    return time ?? null;
  }

  async findByGroup(grupoId: string): Promise<Time[]> {
    return this.times.filter((time) => time.grupoId === grupoId);
  }

  async findBySigla(sigla: string): Promise<Time | null> {
    const time = this.times.find(
      (t) => t.sigla.toLowerCase() === sigla.toLowerCase()
    );
    return time ?? null;
  }

  async atualizarPontuacao(
    id: string,
    dados: UpdateStandingTimeData
  ): Promise<Time> {
    const index = this.times.findIndex((t) => t.id === id);

    if (index === -1) {
      throw new Error("Time não encontrado");
    }

    this.times[index] = {
      ...this.times[index],
      vitorias: dados.vitorias ?? this.times[index].vitorias,
      empates: dados.empates ?? this.times[index].empates,
      derrotas: dados.derrotas ?? this.times[index].derrotas,
      golsPro: dados.golsPro ?? this.times[index].golsPro,
      golsContra: dados.golsContra ?? this.times[index].golsContra,
      pontos: dados.pontos ?? this.times[index].pontos,
      classificado: dados.classificado ?? this.times[index].classificado,
      updatedAt: new Date(),
    };

    return this.times[index];
  }

  async update(id: string, data: UpdateTimeData): Promise<Time> {
    const index = this.times.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Time não encontrado");
    }

    this.times[index] = {
      ...this.times[index],
      ...data,
      updatedAt: new Date(),
    };

    return this.times[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.times.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }

    this.times.splice(index, 1);
    return true;
  }
}