import type { JogoRepository, ListJogosFilters } from "@/domain/repositories/jogo.repository";
import type { Jogo } from "../../../@types/prisma/client";
import type { Prisma } from "../../../@types/prisma/browser";
import { prisma } from "@/libs/prisma";


export class PrismaJogosRepository implements JogoRepository {
    
    async create(data: Prisma.JogoUncheckedCreateInput): Promise<Jogo> {
        return await prisma.jogo.create({
            data,
        });
    }

    async list(filters?: ListJogosFilters): Promise<Jogo[]> {
        const where: Prisma.JogoWhereInput = {};

        if (filters?.status) {
            where.status = filters.status;
        }

        if (filters?.grupoId) {
            where.grupoId = filters.grupoId;
        }

        const jogos = await prisma.jogo.findMany({
            where,
            include: {
                timeCasa: true,
                timeFora: true,
                grupo: true,
            },
            orderBy: {
                data: "asc",
            },
        });

        return jogos ?? [];
    }

    async getById(id: string): Promise<Jogo | null> {
        return await prisma.jogo.findUnique({
            where: { id },
            include: {
                timeCasa: true,
                timeFora: true,
                grupo: true,
            },
        });
    }

    async update(id: string, data: Prisma.JogoUncheckedUpdateInput): Promise<Jogo> {
        return await prisma.jogo.update({
            where: { id },
            data,
        });
    }

    async lancarResultado(id: string, golsCasa: number, golsFora: number): Promise<Jogo> {
        return await prisma.jogo.update({
            where: { id },
            data: {
                golsCasa,
                golsFora,
                status: "CONCLUIDO",
            },
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.jogo.delete({
            where: { id },
        });
    }

    async recalcularClassificacaoGrupo(grupoId: string): Promise<void> {
        const jogosEncerrados = await prisma.jogo.findMany({
            where: {
                grupoId,
                status: "CONCLUIDO",
            },
        });

        const tabela: Record<string, {
            pontos: number;
            jogos: number;
            vitorias: number;
            empates: number;
            derrotas: number;
            golsPro: number;
            golsContra: number;
            saldoGols: number;
        }> = {};


        const inicializarTime = (timeId: string) => {
            if (!tabela[timeId]) {
                tabela[timeId] = {
                    pontos: 0,
                    jogos: 0,
                    vitorias: 0,
                    empates: 0,
                    derrotas: 0,
                    golsPro: 0,
                    golsContra: 0,
                    saldoGols: 0,
                };
            }
        };

        for (const jogo of jogosEncerrados) {
            if (jogo.golsCasa === null || jogo.golsFora === null) continue;

            const timeCasa = jogo.timeIdCasa;
            const timeFora = jogo.timeIdFora;

            inicializarTime(timeCasa);
            inicializarTime(timeFora);

            tabela[timeCasa].jogos += 1;
            tabela[timeFora].jogos += 1;

            tabela[timeCasa].golsPro += jogo.golsCasa;
            tabela[timeCasa].golsContra += jogo.golsFora;

            tabela[timeFora].golsPro += jogo.golsFora;
            tabela[timeFora].golsContra += jogo.golsCasa;

            // Vitória do Time da Casa
            if (jogo.golsCasa > jogo.golsFora) {
                tabela[timeCasa].pontos += 3;
                tabela[timeCasa].vitorias += 1;
                tabela[timeFora].derrotas += 1;
            } else if (jogo.golsCasa < jogo.golsFora) {
                // Vitória do Time Visitante
                tabela[timeFora].pontos += 3;
                tabela[timeFora].vitorias += 1;
                tabela[timeCasa].derrotas += 1;
            } else {
                // Empate
                tabela[timeCasa].pontos += 1;
                tabela[timeFora].pontos += 1;
                tabela[timeCasa].empates += 1;
                tabela[timeFora].empates += 1;
            }

            tabela[timeCasa].saldoGols = tabela[timeCasa].golsPro - tabela[timeCasa].golsContra;
            tabela[timeFora].saldoGols = tabela[timeFora].golsPro - tabela[timeFora].golsContra;
        }

    
    }
}