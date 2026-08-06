import type { Time } from "../interfaces/time";

export interface CriarTimeData {
  nome: string;
  sigla: string;
  bandeira: string;
  grupoId: string;
  golsPro: number;
  golsContra: number;
  pontos: number;
  classificado: boolean;
}

export interface AtualizarTimeData {
    nome?: string,
    sigla?: string,
    bandeira?: string,
    grupoId?: string
}

export interface AtualizarPontuacaoTimeData {
  golsPro: number;
  golsContra: number;
  pontos: number;
  classificado?: boolean;
}

export interface TimeRepository {
    create(data: CriarTimeData): Promise<Time>;
    findById(id: string): Promise<Time | null>;
    findByGroup(grupoId: string): Promise<Time[]>;
    update(id: string, data: AtualizarTimeData): Promise<Time>;
    atualizarPontuacao(id: string, data: AtualizarPontuacaoTimeData): Promise<Time>
    delete(id: string): Promise<boolean>
}