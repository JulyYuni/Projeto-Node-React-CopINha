
import type { NoticiaRepository } from "@/domain/repositories/noticia.repository";
import type {NoticiaUncheckedCreateInput, NoticiaUpdateInput } from "../../../@types/prisma/models";
import type { Noticia } from "../../../@types/prisma/client";
import { prisma } from "@/libs/prisma";


export class PrismaNoticiasRepository implements NoticiaRepository {
    create(data: NoticiaUncheckedCreateInput): Promise<Noticia> {
        return prisma.noticia.create({ data })
    }

    list(): Promise<Noticia[]> {
        return prisma.noticia.findMany({
            orderBy: { publicadoEm: "desc" },
        })
    }

    listByGrupoId(grupoId: string): Promise<Noticia[]> {
        return prisma.noticia.findMany({
            where: { grupoId },
            orderBy: { publicadoEm: "desc" },
        })
    }

    getById(id: string): Promise<Noticia | null> {
        return prisma.noticia.findUnique({ where: { id } })
    }

    update(id: string, data: NoticiaUpdateInput): Promise<Noticia> {
        return prisma.noticia.update({ where: { id }, data })
    }

    async delete(id: string): Promise<void> {
        await prisma.noticia.delete({ where: { id } })
    }   
}