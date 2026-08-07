import { ConflictError } from "@/domain/errors/conflict.error";
import type { Grupo } from "../domain/interfaces/grupo";
import type { UpdateGrupoData, CreateGrupoData, GrupoRepository } from "../domain/repositories/grupo.repository";
import { NotFoundError } from "@/domain/errors/not.found.error";

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

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository
  }

  async execute(id: string): Promise<boolean> {
      const grupo = await this.grupoRepository.findById(id);
        
      if (!grupo) {
        throw new NotFoundError('Grupo')
      }

      await this.grupoRepository.delete(id);
      return true
    }
}