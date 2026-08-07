import { ConflictError } from "@/domain/errors/conflict.error";
import type { Grupo } from "../domain/interfaces/grupo";
import type { UpdateGrupoData, CreateGrupoData, GrupoRepository } from "../domain/repositories/grupo.repository";
import { NotFoundError } from "@/domain/errors/not.found.error";
import type { TimeRepository } from "@/domain/repositories/time.repository";

export class CreateGrupoUseCase {
  private grupoRepository: GrupoRepository;

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository
  }

  async execute(input: CreateGrupoData): Promise<Grupo> {
    const existe = await this.grupoRepository.findByNome(input.nome)

    if(existe) {
      throw new ConflictError('Já existe um grupo com esse nome')
    }

    return await this.grupoRepository.create(input)
  }
}

export class FindAllGruposUseCase {
  private grupoRepository: GrupoRepository;

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository;
  }

  async execute(): Promise<Grupo[]> {
    return this.grupoRepository.findAll();
  }
}

export class FindByIdUseCase {
  private grupoRepository: GrupoRepository

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository
  }

  async execute(id: string): Promise<Grupo> {
    const grupo = await this.grupoRepository.findById(id);
    
    if(!grupo) {
      throw new NotFoundError('Grupo')
    }

    return grupo;
  }
}


export class UpdateGrupoUsecase {
  private grupoRepository: GrupoRepository

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository
  }

  async execute(id: string, data: UpdateGrupoData): Promise<Grupo> {
    const grupo = await this.grupoRepository.findById(id);

    if(!grupo) {
      throw new NotFoundError('Grupo')
    }

    const GrupoAtualizado = await this.grupoRepository.update(id, data)

    return GrupoAtualizado;
  }
}

export class DeleteGrupoUseCase {
  private grupoRepository: GrupoRepository
  private timeRepository: TimeRepository

  constructor(grupoRepository: GrupoRepository, timeRepository: TimeRepository) {
    this.grupoRepository = grupoRepository
    this.timeRepository = timeRepository
  }

  async execute(id: string): Promise<boolean> {
      const grupo = await this.grupoRepository.findById(id);
        
      if (!grupo) {
        throw new NotFoundError('Grupo')
      }

      const times = await this.timeRepository.findByGroup(id)

      if(times.length > 0) {
        throw new ConflictError('Não é possivel excluir grupo com times')
      }

      await this.grupoRepository.delete(id);
      return true
    }
}