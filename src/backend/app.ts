import { env } from "process";
import { timeRoutes} from "./infra/http/routes/time.routes";
import fastify from "fastify";
import fastifyJwt from "fastify"

export const app = fastify()

app.register(timeRoutes)

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})