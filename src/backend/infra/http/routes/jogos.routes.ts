import type { FastifyInstance } from "fastify";
import { jogosRoutes } from "../controllers/jogos/jogos.routes";

export async function appRoutesJogos(app:FastifyInstance) {
    
    app.register(jogosRoutes, {prefix: '/jogos'})

}