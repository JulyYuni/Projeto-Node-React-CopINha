import z from "zod"
import { prisma } from "@/libs/prisma.js"
import type { FastifyReply, FastifyRequest } from "fastify"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
// import { env } from "@/env/index.js" // — vamos usar isso pro segredo do JWT depois

export async function login(request: FastifyRequest, reply: FastifyReply) {
    const loginBodySchema = z.object({
        email: z.email().max(100),
        password: z.string().min(8).max(16),
    })

    const { email, password } = loginBodySchema.parse(request.body)

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        return reply.status(401).send({ error: "Credenciais inválidas" })
    }

    const passwordMatches = await compare(password, user.passwordHash)

    if (!passwordMatches) {
        return reply.status(401).send({ error: "Credenciais inválidas" })
    }

    const token = jwt.sign(
        { sub: user.id, email: user.email },
        "uaebufabweiajfinawfid", 
        { expiresIn: "8h" }
    )

    return reply.status(200).send({ token })
}