import type { FastifyInstance } from "fastify";
import { login } from "./login.controller";

export async function usersRoutes(app: FastifyInstance){
    app.post('/', login)
}