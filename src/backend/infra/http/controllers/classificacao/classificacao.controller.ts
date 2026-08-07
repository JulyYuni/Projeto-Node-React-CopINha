import type { FastifyRequest, FastifyReply } from 'fastify';
import { makeObterClassificacaoUseCase } from '@/factories/classificacao.factories' //Warning pois makeObterClassificacaoUseCase precisa ser implementada
import { AppError } from '@/domain/errors/app.error';

export async function getClassificacao(request: FastifyRequest, reply: FastifyReply) {
  const { grupoId } = request.params as { grupoId: string };

  const useCase = makeObterClassificacaoUseCase();

  try {
    const classificacao = await useCase.execute(grupoId);
    return reply.status(200).send(classificacao);
  } catch (err) {
    if (err instanceof AppError) {
      return reply.status(err.statusCode).send({ message: err.message });
    }
    throw err;
  }
}