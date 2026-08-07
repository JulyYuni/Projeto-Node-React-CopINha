import type { FastifyInstance } from 'fastify';
import { getClassificacao } from '@/infra/http/controllers/classificacao/classificacao.controller';

export async function classificacaoRoutes(fastify: FastifyInstance) {
  fastify.get('/grupo/:grupoId/classificacao', getClassificacao);
}