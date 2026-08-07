import type { FastifyRequest, FastifyReply } from 'fastify'
import { createGrupoSchema, updateGrupoSchema } from '@/infra/http/schemas/grupo.schema';
import { makeCreateGrupoUseCase } from '@/factories/grupo.factories';
import { makeFindByIdGrupoUseCase } from '@/factories/grupo.factories';
import { makeUpdateGrupoUseCase } from '@/factories/grupo.factories';
import { makeDeleteGrupoUseCase } from '@/factories/grupo.factories';

export async function createGrupo(request: FastifyRequest, reply: FastifyReply) {
  const body = createGrupoSchema.parse(request.body);

  const useCase = makeCreateGrupoUseCase();

  try {
    const grupo = await useCase.execute(body);
    return reply.status(201).send(grupo);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message });
    }
    throw err;
  }
}

export async function getGrupoById(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  const useCase = makeFindByIdGrupoUseCase();

  try {
    const grupo = await useCase.execute(id);
    return reply.status(200).send(grupo);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}

export async function updateGrupo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const body = updateGrupoSchema.parse(request.body);

  const useCase = makeUpdateGrupoUseCase();

  try {
    const grupo = await useCase.execute(id, body);
    return reply.status(200).send(grupo);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}

export async function deleteGrupo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  const useCase = makeDeleteGrupoUseCase();

  try {
    await useCase.execute(id);
    return reply.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}