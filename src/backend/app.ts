import { env } from "process";
import { timeRoutes} from "./infra/http/routes/time.routes";
import fastify from "fastify";
import fastifyJwt from "fastify"
import { grupoRoutes } from "./infra/http/routes/grupo.routes";
import { appRoutesJogos } from "./infra/http/routes/jogos.routes";
import { appRoutesSimulador } from "./infra/http/routes/simulacao.routes";
import { appRoutesNoticia } from "./infra/http/routes/noticia.routes";
import { appRoutesLogin } from "./infra/http/routes/login.routes";

export const app = fastify()

app.register(timeRoutes)
app.register(grupoRoutes)
app.register(appRoutesJogos)
app.register(appRoutesSimulador)
app.register(appRoutesNoticia)
app.register(appRoutesLogin)

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})
