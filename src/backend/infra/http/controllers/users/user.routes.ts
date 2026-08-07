import type { FastifyInstance } from "fastify";
import { login } from "./login.controller";
import { logout } from "./logout.controller"
import { verifyJwt } from "../../middlewares/verify-jwt";

export async function usersRoutes(app: FastifyInstance){
    app.post('/', login)

    app.post('/logout', { preHandler: [verifyJwt] }, logout)
}