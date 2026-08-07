import type { AtualizarTimeData, TimeRepository } from "../domain/repositories/time.repository";
import type { Time } from "../domain/interfaces/time";
import type {GrupoRepository } from "../domain/repositories/grupo.repository";
import { NotFoundError } from "@/domain/errors/not.found.error";
import { ConflictError } from "@/domain/errors/conflict.error";

interface CriarTimeInput {
  nome: string;
  sigla: string;
  bandeira: string;
  grupoId: string;
}

export class CreateTimeUseCase {
  private timeRepository: TimeRepository;

  constructor(timeRepository: TimeRepository) {
    this.timeRepository = timeRepository
  }

  async execute(input: CriarTimeInput): Promise<Time> {
    const existe = await this.timeRepository.findById(input.nome)

    if(existe) {
      throw new ConflictError('Já existe time com esse nome')
    }
    return this.timeRepository.create({
      ...input,
      golsPro: 0,
      golsContra: 0,
      pontos: 0,
      classificado: false,
    });
  }
}

export class FindByIdTimeUseCase {
  private timeRepository: TimeRepository

  constructor(timeRepository: TimeRepository) {
    this.timeRepository = timeRepository
  }

  async execute(id: string): Promise<Time> {
    const time = await this.timeRepository.findById(id);
    
    if(!time) {
      throw new NotFoundError('Time')
    }

    return time;
  }
}

export class FindByGroupUseCase {
  private timeRepository: TimeRepository
  private grupoRepository: GrupoRepository

  constructor(timeRepository: TimeRepository, grupoRepository: GrupoRepository) {
    this.timeRepository = timeRepository
    this.grupoRepository = grupoRepository
  }

  async execute(grupoId: string): Promise<Time[]> {
    const grupo = await this.grupoRepository.findById(grupoId);

    if(!grupo) {
      throw new NotFoundError('Grupo')
    }

    const times = await this.timeRepository.findByGroup(grupoId);

    return times;
  }
}

export class UpdateTimeUsecase {
  private timeRepository: TimeRepository

  constructor(timeRepository: TimeRepository) {
    this.timeRepository = timeRepository
  }

  async execute(id: string, data: AtualizarTimeData): Promise<Time> {
    const time = await this.timeRepository.findById(id);

    if(!time) {
      throw new NotFoundError('Time')
    }

    const timeAtualizado = await this.timeRepository.update(id, data)
    return timeAtualizado;
  }
}

export class DeleteTimeUseCase {
  private timeRepository: TimeRepository

  constructor(timeRepository: TimeRepository) {
    this.timeRepository = timeRepository
  }

  async execute(id: string): Promise<boolean> {
      const time = await this.timeRepository.findById(id);
        
      if (!time) {
        throw new NotFoundError('Time')
      }

      await this.timeRepository.delete(id);
      return true
    }
}