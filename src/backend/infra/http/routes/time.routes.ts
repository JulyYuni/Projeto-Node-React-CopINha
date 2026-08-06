import type { FastifyInstance } from "fastify";
import { createTime, deleteTime, getTimeById, getTimesByGrupo, updateTime } from "../controllers/times/time.controller";

export async function timeRoutes(fastify: FastifyInstance) {
  fastify.post('/times', createTime);

  fastify.get('/times/:id', getTimeById);

  fastify.get('/times/grupo/:groupId', getTimesByGrupo)

  fastify.put('/times/:id', updateTime,);

  fastify.delete('/times/:id', deleteTime);
}