import type { Grupo, GrupoComTimesEJogos } from "../interfaces/grupo";
export interface CreateGrupoData {
    nome: string
}

export type UpdateGrupoData = Partial<CreateGrupoData>;


export interface GrupoRepository {
    create(data: CreateGrupoData): Promise<Grupo>;
    findById(id: string): Promise<Grupo | null>;
    findByNome(nome: string): Promise<Grupo | null>
    findByIdComTimesEJogos(id: string): Promise<GrupoComTimesEJogos | null>
    update(id: string, data: UpdateGrupoData): Promise<Grupo>;
    delete(id: string): Promise<boolean>
}