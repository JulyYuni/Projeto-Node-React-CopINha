import type { FastifyInstance } from "fastify";
import { createGrupo, deleteGrupo, getAllGrupos, getGrupoById, updateGrupo } from "@/infra/http/controllers/grupos/grupo.controller"

export async function grupoRoutes(fastify: FastifyInstance) {
  fastify.post('/grupo', createGrupo);

  fastify.get('/grupo', getAllGrupos)

  fastify.get('/grupo/:id', getGrupoById);

  fastify.put('/grupo/:id', updateGrupo,);

  fastify.delete('/grupo/:id', deleteGrupo);
}