import type { FastifyRequest, FastifyReply } from "fastify"

export async function logout(_request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ message: "Logout realizado com sucesso" })
}