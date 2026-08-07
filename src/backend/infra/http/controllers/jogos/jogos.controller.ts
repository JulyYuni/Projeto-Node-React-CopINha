import { makeCreateJogoUseCase, makeDeleteJogoUseCase, makeGetJogoByIdUseCase, makeLancarResultadoJogoUseCase, makeListJogosUseCase, makeUpdateJogoUseCase } from "@/factories/jogos.factories";
import type { FastifyReply, FastifyRequest } from "fastify";
import type { Prisma } from "../../../../../@types/prisma/browser";
import z from "zod";



const createJogoBodySchema = z.object({
    grupoId: z.string().uuid("ID de grupo inválido."),
    timeIdCasa: z.string().uuid("ID do time da casa inválido."),
    timeIdFora: z.string().uuid("ID do time visitante inválido."),
    data: z.coerce.date({ message: "Data inválida." }),
    local: z.string().min(2, "O local deve ser informado."),
});

const updateJogoBodySchema = createJogoBodySchema.partial();

const lancarResultadoBodySchema = z.object({
    golsCasa: z.number().int().nonnegative("Gols do time da casa não podem ser negativos."),
    golsFora: z.number().int().nonnegative("Gols do time visitante não podem ser negativos."),
});

const jogoParamsSchema = z.object({
    id: z.string().uuid("ID de jogo inválido."),
});

const listJogosQuerySchema = z.object({
    grupoId: z.string().uuid("ID de grupo inválido.").optional(),
    status: z.enum(["PROXIMO", "EM_ANDAMENTO", "ENCERRADO"]).optional(),
});

export class JogosController {

    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            const body = createJogoBodySchema.parse(request.body);

            const createJogoUseCase = makeCreateJogoUseCase();
            const jogo = await createJogoUseCase.execute(body as Prisma.JogoUncheckedCreateInput);

            return reply.status(201).send(jogo);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async list(request: FastifyRequest, reply: FastifyReply) {
        try {
            const filters = listJogosQuerySchema.parse(request.query);

            const listJogosUseCase = makeListJogosUseCase();
            const jogos = await listJogosUseCase.execute();

            return reply.status(200).send(jogos);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async getById(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = jogoParamsSchema.parse(request.params);

            const getJogoByIdUseCase = makeGetJogoByIdUseCase();
            const jogo = await getJogoByIdUseCase.execute(id);

            return reply.status(200).send(jogo);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = jogoParamsSchema.parse(request.params);
            const body = updateJogoBodySchema.parse(request.body);

            const updateJogoUseCase = makeUpdateJogoUseCase();
            const jogo = await updateJogoUseCase.execute(id, body as Prisma.JogoUncheckedUpdateInput);

            return reply.status(200).send(jogo);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);        }
    }

    async lancarResultado(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = jogoParamsSchema.parse(request.params);
            const { golsCasa, golsFora } = lancarResultadoBodySchema.parse(request.body);

            const lancarResultadoUseCase = makeLancarResultadoJogoUseCase();
            const jogo = await lancarResultadoUseCase.execute(id, golsCasa, golsFora);

            return reply.status(200).send(jogo);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = jogoParamsSchema.parse(request.params);

            const deleteJogoUseCase = makeDeleteJogoUseCase();
            await deleteJogoUseCase.execute(id);

            return reply.status(204).send();
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    
}