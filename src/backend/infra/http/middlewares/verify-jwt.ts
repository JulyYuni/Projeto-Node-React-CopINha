import type { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "@/env/index.ts"; 

interface TokenPayload {
    sub: string;
    email: string;
}

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return reply.status(401).send({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
        return reply.status(401).send({ error: "Token mal formatado" });
    }

    try {
        const payload = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
        request.body = payload;
    } catch {
        return reply.status(401).send({ error: "Token inválido ou expirado" });
    }
}