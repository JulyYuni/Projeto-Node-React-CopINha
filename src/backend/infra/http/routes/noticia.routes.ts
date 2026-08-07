import type { FastifyInstance } from "fastify";
import { noticiasRoutes } from "../controllers/noticias/noticias.routes.ts";

export async function appRoutesNoticia(app: FastifyInstance){
    app.register(noticiasRoutes, {prefix: '/noticias'})
}