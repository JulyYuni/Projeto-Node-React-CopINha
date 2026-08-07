import type { Jogo } from "../../../@types/prisma/client";
import type { StatusJogo } from "../../../@types/prisma/enums";
import type { JogoUncheckedCreateInput, JogoUpdateInput } from "../../../@types/prisma/models";

export interface ListJogosFilters {
    status?: StatusJogo;
    grupoId?: string;
}

export interface JogoRepository {
    create(data: JogoUncheckedCreateInput): Promise<Jogo>;
    list(filters?: ListJogosFilters): Promise<Jogo[]>;
    getById(id: string): Promise<Jogo | null>;
    update(id: string, data: JogoUpdateInput): Promise<Jogo>;
    lancarResultado(id: string, golsCasa: number, golsFora: number): Promise<Jogo>;
    delete(id: string): Promise<void>;
    recalcularClassificacaoGrupo(grupoId: string): Promise<void>;
}