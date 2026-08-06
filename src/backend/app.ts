import { timeRoutes} from "./infra/http/routes/time.routes";
import fastify from "fastify";

export const app = fastify()

app.register(timeRoutes)