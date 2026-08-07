import type { FastifyInstance } from "fastify";
import { JogosController } from "./jogos.controller";

const jogosController = new JogosController();

export async function jogosRoutes(app: FastifyInstance) {
    app.post("/", jogosController.create);

    app.get("/", jogosController.list);

    app.get("/:id", jogosController.getById);

    app.put("/:id", jogosController.update);

    app.patch("/:id/resultado", jogosController.lancarResultado);

    app.delete("/:id", jogosController.delete);
}