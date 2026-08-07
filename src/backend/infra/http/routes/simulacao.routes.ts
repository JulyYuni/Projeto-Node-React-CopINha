import type { FastifyInstance } from "fastify";
import { appRouteSimulacao } from "../controllers/simulacao/simulacao.routes";

export async function appRoutesJogos(app:FastifyInstance) {
    
    app.register(appRouteSimulacao, {prefix: '/simulador'})

}