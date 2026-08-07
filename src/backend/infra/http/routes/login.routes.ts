import type { FastifyInstance } from "fastify";
import { usersRoutes } from "../controllers/users/user.routes.ts";

export async function appRoutesLogin(app: FastifyInstance){
    app.register(usersRoutes, {prefix: '/users'})
}