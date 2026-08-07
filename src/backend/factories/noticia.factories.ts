import { CreateNoticiaUseCase, DeleteNoticiaUseCase, GetNoticiaByIdUseCase, ListNoticiasUseCase, UpdateNoticiaUseCase } from "@/application/noticia.usecase";
import { PrismaNoticiasRepository } from "@/infra/database/prisma.noticia.repository";

export function makeCreateNoticiaUseCase() {
    const noticiasRepository = new PrismaNoticiasRepository();
    const useCase = new CreateNoticiaUseCase(noticiasRepository);
    return useCase;
}

export function makeListNoticiasUseCase() {
    const noticiasRepository = new PrismaNoticiasRepository();
    const useCase = new ListNoticiasUseCase(noticiasRepository);
    return useCase;
}

export function makeGetNoticiaByIdUseCase() {
    const noticiasRepository = new PrismaNoticiasRepository();
    const useCase = new GetNoticiaByIdUseCase(noticiasRepository);
    return useCase;
}

export function makeUpdateNoticiaUseCase() {
    const noticiasRepository = new PrismaNoticiasRepository();
    const useCase = new UpdateNoticiaUseCase(noticiasRepository);
    return useCase;
}

export function makeDeleteNoticiaUseCase() {
    const noticiasRepository = new PrismaNoticiasRepository();
    const useCase = new DeleteNoticiaUseCase(noticiasRepository);
    return useCase;
}