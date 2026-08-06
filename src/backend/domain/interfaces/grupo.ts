import type { Jogo } from "./jogo";
import type { Time } from "./time";
export interface Grupo {
    id: string;
    nome: string;
    time: Time[];
    jogo: Jogo[];
}