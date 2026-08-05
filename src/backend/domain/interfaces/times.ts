import type { Grupos } from "./grupos";
import type { Jogos } from "./jogos";

export interface Times {
    id: string;
    nome: string;
    sigla: string;
    bandeira: string;
    grupoId: string;
    grupo: Grupos;
    jogoCasa: Jogos;
    jogoFora: Jogos;
    golsPro: number;
    golsContra: number;
    saldoGols: number;
    pontos: number;
    classificado: boolean;
    createdAt: Date;
    updatedAt: Date;
}