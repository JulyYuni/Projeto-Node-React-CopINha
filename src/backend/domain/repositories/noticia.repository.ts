import type { Noticia, Prisma } from "../../../@types/prisma/client"

export interface NoticiaRepository{
    create(data: Prisma.NoticiaCreateInput): Promise<Noticia>
    
    list(): Promise<Noticia[]>
    listByGrupoId(grupoId: string): Promise<Noticia[]>
    
    getById(id: string): Promise<Noticia | null>
    
    update(id:string,data:Prisma.NoticiaUpdateInput):Promise<Noticia>
    delete(id: string):Promise<void>
}