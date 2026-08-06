import type { Grupo, GrupoComTimesEJogos } from "../interfaces/grupo";
export interface CriarGrupoData {
    nome: string
}

export type AtualizarGrupoData = Partial<CriarGrupoData>;


export interface GrupoRepository {
    create(data: CriarGrupoData): Promise<Grupo>;
    findById(id: string): Promise<Grupo | null>;
    findByIdComTimesEJogos(id: string): Promise<GrupoComTimesEJogos | null>
    update(id: string, data: AtualizarGrupoData): Promise<Grupo>;
    delete(id: string): Promise<boolean>
}