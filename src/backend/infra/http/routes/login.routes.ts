import type { FastifyInstance } from "fastify";
import { usersRoutes } from "../controllers/users/user.routes.ts";

export async function appRoutes(app: FastifyInstance){
    app.register(usersRoutes, {prefix: '/users'})
}