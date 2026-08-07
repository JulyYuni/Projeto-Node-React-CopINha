import type { Grupo } from "../domain/interfaces/grupo";
import type { UpdateGrupoData, CreateGrupoData, GrupoRepository } from "../domain/repositories/grupo.repository";

export class CreateGrupoUseCase {
  private grupoRepository: GrupoRepository;

  constructor(grupoRepository: GrupoRepository) {
    this.grupoRepository = grupoRepository
  }

  async execute(input: CreateGrupoData): Promise<Grupo> {
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
      throw new Error('Grupo não existe')
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
      throw new Error('Grupo nao existe')
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
        throw new Error('Grupo nao existe');
      }

      await this.grupoRepository.delete(id);
      return true
    }
}