import type { Jogos } from "./jogo";
import type { Time } from "./time";

export interface Grupo {
    id: string;
    nome: string;
    createdAt: Date;
}

export interface GrupoComTimesEJogos extends Grupo {
    times: Time[]
    jogos: Jogos[]
}