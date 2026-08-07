import { prisma } from "../../libs/prisma";
import { Prisma } from "../../../@types/prisma/client";
import type { UpdateGrupoData, CreateGrupoData, GrupoRepository } from "../../domain/repositories/grupo.repository";
import type { Grupo, GrupoComTimesEJogos } from "../../domain/interfaces/grupo";

export class PrismaGrupoRepository implements GrupoRepository {
    async create(data: CreateGrupoData): Promise<Grupo>  {
        const result = await prisma.grupo.create({
            data: {
                nome: data.nome
            }
        })

        return result;
    }

    async findAll(): Promise<Grupo[]> {
        return await prisma.grupo.findMany({
            orderBy: { nome: 'asc' },
        });
    }

    async findById(id: string): Promise<Grupo | null> {
        return await prisma.grupo.findUnique({ where: { id }})
    }

    async findByNome(nome: string): Promise<Grupo | null> {
        return await prisma.grupo.findUnique({ where: {nome}})
    }

    async findByIdComTimesEJogos(id: string): Promise<GrupoComTimesEJogos | null> {
        return await prisma.grupo.findUnique({
            where: { id },
            include: { times: true, jogos: true },
        });
    }
    async update(id: string, data: UpdateGrupoData): Promise<Grupo> {
        return await prisma.grupo.update({where: {id}, data})
    }

    async delete(id: string): Promise<boolean> {
        try {
            await prisma.grupo.delete({where: {id}})

            return true;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return false; 
            }
            throw error;
        }
    }
}