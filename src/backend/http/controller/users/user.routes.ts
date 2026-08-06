import type { FastifyInstance } from "fastify";
import { login } from "./register.controller.js";

export async function usersRoutes(app: FastifyInstance){
    app.post('/', login)
}