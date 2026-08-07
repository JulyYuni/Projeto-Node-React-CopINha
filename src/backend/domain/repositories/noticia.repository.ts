import type { Noticia, Prisma } from "../../../@types/prisma/client"
import type { NoticiaWhereInput } from "../../../@types/prisma/models"

export interface NoticiaRepository{

    create(data: Prisma.NoticiaCreateInput): Promise<Noticia>
    
    list(where:NoticiaWhereInput): Promise<Noticia[]>
    listByGrupoId(grupoId: string): Promise<Noticia[]| null>
    
    getById(id: string): Promise<Noticia | null>
    
    update(id:string,data:Prisma.NoticiaUpdateInput):Promise<Noticia>
    delete(id: string):Promise<void>
}