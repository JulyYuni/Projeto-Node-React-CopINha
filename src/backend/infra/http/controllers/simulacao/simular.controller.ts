import { simularResultadosBodySchema, SimularResultadosGrupoUseCase } from "@/application/simulador-resultado.usecase";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export class SimuladorController {
    constructor(){}
    
    async calcular(request: FastifyRequest, reply: FastifyReply) {
        try {
            const body = simularResultadosBodySchema.parse(request.body);

            const simularUseCase = new SimularResultadosGrupoUseCase();
            const tabelaSimulada = await simularUseCase.execute(body);

            return reply.status(200).send({
                simulado: true,
                classificacao: tabelaSimulada,
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                return reply.status(400).send({
                    message: "Dados de simulação inválidos.",
                    errors: error.flatten().fieldErrors,
                });
            }

            if (error instanceof Error) {
                return reply.status(400).send({ message: error.message });
            }

            return reply.status(500).send({ message: "Erro interno do servidor." });
        }
    }
}