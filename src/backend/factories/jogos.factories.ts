import { CreateJogoUseCase, DeleteJogoUseCase, GetJogoByIdUseCase, LancarResultadoJogoUseCase, ListJogosUseCase, UpdateJogoUseCase } from "@/application/jogo.usecase";
import { PrismaJogosRepository } from "@/infra/database/prisma.jogos.reposity";

export function makeCreateJogoUseCase() {
    const repository = new PrismaJogosRepository();
    return new CreateJogoUseCase(repository);
}

export function makeListJogosUseCase() {
    const repository = new PrismaJogosRepository();
    return new ListJogosUseCase(repository);
}

export function makeGetJogoByIdUseCase() {
    const repository = new PrismaJogosRepository();
    return new GetJogoByIdUseCase(repository);
}

export function makeUpdateJogoUseCase() {
    const repository = new PrismaJogosRepository();
    return new UpdateJogoUseCase(repository);
}

export function makeLancarResultadoJogoUseCase() {
    const repository = new PrismaJogosRepository();
    return new LancarResultadoJogoUseCase(repository);
}

export function makeDeleteJogoUseCase() {
    const repository = new PrismaJogosRepository();
    return new DeleteJogoUseCase(repository);
}