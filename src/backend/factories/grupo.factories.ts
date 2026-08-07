import { CreateGrupoUseCase, UpdateGrupoUsecase, FindByIdUseCase, DeleteGrupoUseCase, FindAllGruposUseCase } from "@/application/grupo.usecase";
import { PrismaGrupoRepository } from "@/infra/database/prisma.grupo.repository";


export function makeCreateGrupoUseCase () {
    const grupoRepository = new PrismaGrupoRepository
    return new CreateGrupoUseCase(grupoRepository)
}

export function makeFindAllGruposUseCase(): FindAllGruposUseCase {
  const grupoRepository = new PrismaGrupoRepository();
  return new FindAllGruposUseCase(grupoRepository);
}

export function makeFindByIdGrupoUseCase() {
    const grupoRepository = new PrismaGrupoRepository
    return new FindByIdUseCase(grupoRepository);
}

export function makeUpdateGrupoUseCase() {
    const grupoRepository = new PrismaGrupoRepository
    return new UpdateGrupoUsecase(grupoRepository)
}

export function makeDeleteGrupoUseCase() {
    const grupoRepository = new PrismaGrupoRepository
    return new DeleteGrupoUseCase(grupoRepository)
}