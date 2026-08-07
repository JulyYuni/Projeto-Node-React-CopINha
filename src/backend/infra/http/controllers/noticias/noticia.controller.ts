import { makeCreateNoticiaUseCase, makeListNoticiasUseCase, makeGetNoticiaByIdUseCase, makeUpdateNoticiaUseCase, makeDeleteNoticiaUseCase, } from "@/factories/noticia.factories"; // Ajuste o caminho se necessário
import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


const createNoticiaBodySchema = z.object({
    titulo: z.string().min(3),
    subTitulo: z.string(),
    corpoDaNoticia: z.string().min(10),
    imagemCapa: z.string().url(),
    tempoDeLeituraMin: z.number().int().positive(),
    autor: z.string(),
    grupoId: z.string().uuid().nullable().optional(),
});

const updateNoticiaBodySchema = createNoticiaBodySchema.partial();

const noticiaParamsSchema = z.object({
    id: z.string().uuid(),
});

const listNoticiasQuerySchema = z.object({
    grupoId: z.string().uuid().optional(),
});



export class NoticiasController {

    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            const body = createNoticiaBodySchema.parse(request.body);

            const createNoticiaUseCase = makeCreateNoticiaUseCase();
            const noticia = await createNoticiaUseCase.execute(body);

            return reply.status(201).send(noticia);
        } catch (error) {
            return new Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async list(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { grupoId } = listNoticiasQuerySchema.parse(request.query);

            const listNoticiasUseCase = makeListNoticiasUseCase();
            const noticias = await listNoticiasUseCase.execute(grupoId);

            return reply.status(200).send(noticias);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async getById(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = noticiaParamsSchema.parse(request.params);

            const getNoticiaByIdUseCase = makeGetNoticiaByIdUseCase();
            const noticia = await getNoticiaByIdUseCase.execute(id);

            return reply.status(200).send(noticia);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = noticiaParamsSchema.parse(request.params);
            const body = updateNoticiaBodySchema.parse(request.body);

            const updateNoticiaUseCase = makeUpdateNoticiaUseCase();
            const noticia = await updateNoticiaUseCase.execute(id, body);

            return reply.status(200).send(noticia);
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = noticiaParamsSchema.parse(request.params);

            const deleteNoticiaUseCase = makeDeleteNoticiaUseCase();
            await deleteNoticiaUseCase.execute(id);

            return reply.status(204).send();
        } catch (error) {
            return Error(`Erro algo enviar a requisição ${error}`);
        }
    }
}