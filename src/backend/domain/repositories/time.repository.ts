import type { Time } from "../interfaces/time";

export interface CreateTimeData {
  nome: string;
  sigla: string;
  bandeira: string;
  grupoId: string;
  vitorias?: number;
  empates?: number;
  derrotas?: number;
  golsPro?: number;
  golsContra?: number;
  pontos?: number;
  classificado?: boolean;
}

export interface UpdateTimeData {
  nome?: string;
  sigla?: string;
  bandeira?: string;
  grupoId?: string;
}

export type UpdateStandingTimeData = {
  vitorias?: number;
  empates?: number;
  derrotas?: number;
  golsPro?: number;
  golsContra?: number;
  pontos?: number;
  classificado?: boolean;
};

export interface TimeRepository {
  create(data: CreateTimeData): Promise<Time>;
  findAll(): Promise<Time[]>;
  findById(id: string): Promise<Time | null>;
  findByGroup(grupoId: string): Promise<Time[]>;
  findBySigla(sigla: string): Promise<Time | null>;
  update(id: string, data: UpdateTimeData): Promise<Time>;
  atualizarPontuacao(id: string, data: UpdateStandingTimeData): Promise<Time>;
  delete(id: string): Promise<boolean>;
}