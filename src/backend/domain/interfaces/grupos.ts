import type { Jogos } from "./jogos";
import type { Times } from "./times";

export interface Grupos {
    id: string;
    nome: string;
    time: Times[];
    jogo: Jogos[];
}