import type { FastifyReply, FastifyRequest } from "fastify";
import { createTimeSchema, updateTimeSchema } from "../schemas/time.schema";
import { makeCreateTimeUseCase, makeDeleteTimeUseCase, makeFindByGroupTimeUseCase, makeFindByIdTimeUseCase, makeUpdateTimeUseCase } from "../../../factories/times.factories";

export async function createTime(request: FastifyRequest, reply: FastifyReply) {
    const data = createTimeSchema.parse(request.body)
    
    const useCase = makeCreateTimeUseCase()
    
    try {
        const time = await useCase.execute({
            nome: data.nome,
            sigla: data.sigla,
            bandeira: data.bandeira,
            grupoId: data.grupoId
        })
        return reply.status(201).send(time)
    }    
    catch (error) {

    }
}
    

export async function getTimeById(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  const useCase = makeFindByIdTimeUseCase();

  try {
    const time = await useCase.execute(id);
    return reply.status(200).send(time);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}

export async function getTimesByGrupo(request: FastifyRequest, reply: FastifyReply) {
  const { grupoId } = request.params as { grupoId: string };

  const useCase = makeFindByGroupTimeUseCase();

  try {
    const times = await useCase.execute(grupoId);
    return reply.status(200).send(times);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}

export async function updateTime(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const body = updateTimeSchema.parse(request.body);

  const useCase = makeUpdateTimeUseCase();

  try {
    const time = await useCase.execute(id, body);
    return reply.status(200).send(time);
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}

export async function deleteTime(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

  const useCase = makeDeleteTimeUseCase();

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