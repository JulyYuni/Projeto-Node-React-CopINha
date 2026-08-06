import type { Prisma } from "../../../generated/prisma/client";
import type { Grupo } from "./grupo";
import type { Jogo } from "./jogo";

export interface Time {
    id: string;
    nome: string;
    sigla: string;
    bandeira: string;
    grupoId: string;
    grupo: Grupo;
    jogoCasa: Jogo;
    jogoFora: Jogo;
    golsPro: number;
    golsContra: number;
    saldoGols: number;
    pontos: number;
    classificado: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface TimeRepository {
    create(data: Prisma.TimeCreateInput): Promise<Time>;
    findById(id: number): Promise<Time | null>;
    findByGroup(grupo: Grupo): Promise<Time>;
    update(id: number, data: Prisma.TimeUpdateInput): Promise<Time | null>;
    delete(id: number): Promise<boolean>
}