import type { FastifyInstance } from "fastify";
import { SimuladorController } from "./simular.controller";

const simulacaoController=  new SimuladorController()

export async function appRouteSimulacao(app:FastifyInstance) {
    
    app.post('/calcular',simulacaoController.calcular)


}