import { NotFoundError } from "@/domain/errors/not.found.error";
import type { GrupoRepository } from "@/domain/repositories/grupo.repository";
import type { JogoRepository } from "@/domain/repositories/jogo.repository";
import type { TimeRepository } from "@/domain/repositories/time.repository";
import { calcularClassificacao } from "@/domain/service/classificacao.calculator";

export class ObterClassificacaoUseCase {
  private grupoRepository: GrupoRepository;
  private timeRepository: TimeRepository;
  private jogoRepository: JogoRepository;

  // Recebe jogoRepository como o terceiro parâmetro do construtor
  constructor(
    grupoRepository: GrupoRepository,
    timeRepository: TimeRepository,
    jogoRepository: JogoRepository
  ) {
    this.grupoRepository = grupoRepository;
    this.timeRepository = timeRepository;
    this.jogoRepository = jogoRepository;
  }

  async execute(grupoId: string) {
    const grupo = await this.grupoRepository.findById(grupoId);
    if (!grupo) throw new NotFoundError('Grupo');

    const times = await this.timeRepository.findByGroup(grupoId);
    
    const jogos = await this.jogoRepository.list({ grupoId });

    return calcularClassificacao(times, jogos);
  }
}