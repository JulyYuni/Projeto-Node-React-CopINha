import { prisma } from "../../../libs/prisma";
import type { Time } from "../../../domain/interfaces/time";
import type { UpdateStandingTimeData, UpdateTimeData, CreateTimeData, TimeRepository } from "../../../domain/repositories/time.repository";
import { Prisma } from "../../../../@types/prisma/client";

export class PrismaTimeRepository implements TimeRepository {
    async create(data: CreateTimeData): Promise<Time>  {
        const result = await prisma.time.create({
            data: {
                nome: data.nome,
                sigla: data.sigla,
                bandeira: data.bandeira,
                grupoId: data.grupoId,
                golsPro: data.golsPro,
                golsContra: data.golsContra,
                pontos: data.pontos,
                classificado: data.classificado
            }
        })

        return result;
    }

    async findById(id: string): Promise<Time | null> {
        return await prisma.time.findUnique({ where: { id }})
    }

    async findAll(): Promise<Time[]> {
        return await prisma.time.findMany();
    }

    async findByGroup(grupoId: string): Promise<Time[]> {
        return await prisma.time.findMany({ where: {grupoId}})
    }

    async findBySigla(sigla: string): Promise<Time | null> {
        return await prisma.time.findFirst({ where: { sigla } });
    }
    
    async update(id: string, data: UpdateTimeData): Promise<Time> {
        return await prisma.time.update({where: {id}, data})
    }

    async atualizarPontuacao(id: string, data: UpdateStandingTimeData): Promise<Time> {
        return await prisma.time.update({where: {id}, data})
    }

    async delete(id: string): Promise<boolean> {
        try {
            await prisma.time.delete({where: {id}})

            return true;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return false; 
            }
            throw error;
        }
    }
}