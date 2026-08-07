import { CreateGrupoUseCase, UpdateGrupoUsecase, FindByIdUseCase, DeleteGrupoUseCase, FindAllGruposUseCase } from "@/application/grupo.usecase";
import { FakeGrupoRepository } from "@/infra/database/fakes.repositories/fake.grupo.repository";
import { PrismaTimeRepository } from "@/infra/database/prisma.repositories/prisma.time.repository";


export function makeCreateGrupoUseCase () {
    const grupoRepository = new FakeGrupoRepository
    return new CreateGrupoUseCase(grupoRepository)
}

export function makeFindAllGruposUseCase(): FindAllGruposUseCase {
  const grupoRepository = new FakeGrupoRepository();
  return new FindAllGruposUseCase(grupoRepository);
}

export function makeFindByIdGrupoUseCase() {
    const grupoRepository = new FakeGrupoRepository
    return new FindByIdUseCase(grupoRepository);
}

export function makeUpdateGrupoUseCase() {
    const grupoRepository = new FakeGrupoRepository
    return new UpdateGrupoUsecase(grupoRepository)
}

export function makeDeleteGrupoUseCase() {
    const grupoRepository = new FakeGrupoRepository
    const timeRepository = new PrismaTimeRepository
    return new DeleteGrupoUseCase(grupoRepository, timeRepository)
}