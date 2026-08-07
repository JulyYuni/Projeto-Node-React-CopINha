import { env } from "process";
import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";

import { classificacaoRoutes } from "./infra/http/routes/classificacao.routes";
import { grupoRoutes } from "./infra/http/routes/grupo.routes";
import { timeRoutes } from "./infra/http/routes/time.routes";
import { appRoutesJogos } from "./infra/http/routes/jogos.routes";
import { appRoutesSimulador } from "./infra/http/routes/simulacao.routes";
import { appRoutesNoticia } from "./infra/http/routes/noticia.routes";
import { appRoutesLogin } from "./infra/http/routes/login.routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET as string,
});

app.register(timeRoutes);
app.register(grupoRoutes);
app.register(classificacaoRoutes);
app.register(appRoutesJogos);
app.register(appRoutesSimulador);
app.register(appRoutesNoticia);
app.register(appRoutesLogin);