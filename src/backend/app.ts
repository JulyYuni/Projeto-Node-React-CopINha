import { grupoRoutes } from "./infra/http/routes/grupo.routes";
import { appRoutesNoticia } from "./infra/http/routes/noticia.routes";
import { timeRoutes} from "./infra/http/routes/time.routes";
import fastify from "fastify";

export const app = fastify()

app.register(timeRoutes)
app.register(grupoRoutes)
app.register(appRoutesNoticia)