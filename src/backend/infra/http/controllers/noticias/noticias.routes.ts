import type { FastifyInstance } from "fastify";
import { NoticiasController } from "../../controllers/noticias/noticia.controller"; 

const noticiasController = new NoticiasController();

export async function noticiasRoutes(app: FastifyInstance) {

    app.post("/", noticiasController.create);

    app.get("/", noticiasController.list);

    app.get("/:id", noticiasController.getById);

    app.put("/:id", noticiasController.update);

    app.delete("/:id", noticiasController.delete);
}