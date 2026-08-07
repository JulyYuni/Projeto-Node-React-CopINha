import { CreateTimeUseCase, DeleteTimeUseCase, FindByGroupUseCase, FindByIdTimeUseCase, UpdateTimeUsecase } from "../application/times.usecase";
import { FakeTimeRepository } from "@/infra/database/fakes.repositories/fake.times.repository";
import { FakeGrupoRepository } from "@/infra/database/fakes.repositories/fake.grupo.repository";

export function makeCreateTimeUseCase () {
    const timeRepository = new FakeTimeRepository
    const grupoRepository = new FakeGrupoRepository
    return new CreateTimeUseCase(timeRepository, grupoRepository)
}

export function makeFindByIdTimeUseCase() {
    const timeRepository = new FakeTimeRepository
    return new FindByIdTimeUseCase(timeRepository);
}

export function makeFindByGroupTimeUseCase() {
    const timeRepository = new FakeTimeRepository
    const grupoRepository = new FakeGrupoRepository
    return new FindByGroupUseCase(timeRepository, grupoRepository)
}


export function makeUpdateTimeUseCase() {
    const timeRepository = new FakeTimeRepository
    return new UpdateTimeUsecase(timeRepository)
}

export function makeDeleteTimeUseCase() {
    const timeRepository = new FakeTimeRepository
    return new DeleteTimeUseCase(timeRepository)
}