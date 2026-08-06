import { CreateTimeUseCase, DeleteTimeUseCase, FindByGroupUseCase, FindByIdTimeUseCase, UpdateTimeUsecase } from "../application/times.usecase";
import { PrismaGrupoRepository } from "@/infra/database/prisma.grupo.repository";
import { PrismaTimeRepository } from "../infra/database/prisma.time.repository";

export function makeCreateTimeUseCase () {
    const timeRepository = new PrismaTimeRepository
    return new CreateTimeUseCase(timeRepository)
}

export function makeFindByIdTimeUseCase() {
    const timeRepository = new PrismaTimeRepository
    return new FindByIdTimeUseCase(timeRepository);
}

export function makeFindByGroupTimeUseCase() {
    const timeRepository = new PrismaTimeRepository
    const grupoRepository = new PrismaGrupoRepository
    return new FindByGroupUseCase(timeRepository, grupoRepository)
}


export function makeUpdateTimeUseCase() {
    const timeRepository = new PrismaTimeRepository
    return new UpdateTimeUsecase(timeRepository)
}

export function makeDeleteTimeUseCase() {
    const timeRepository = new PrismaTimeRepository
    return new DeleteTimeUseCase(timeRepository)
}