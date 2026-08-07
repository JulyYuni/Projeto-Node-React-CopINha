/* import { NotFoundError } from "@/domain/errors/not.found.error";
import type { GrupoRepository } from "@/domain/repositories/grupo.repository";
import type { TimeRepository } from "@/domain/repositories/time.repository";
import { calcularClassificacao } from "@/domain/service/classificacao.calculator"; //Warning pois o retorno da função está comentado

export class ObterClassificacaoUseCase {
    private grupoRepository: GrupoRepository
    private timeRepository: TimeRepository
    //Implementar JogoRepository: private jogoRepository: JogoRepository
    
    //Passar jogoRepository como argumento no construtor
    constructor(grupoRepository: GrupoRepository, timeRepository: TimeRepository) {
        this.grupoRepository = grupoRepository
        this.timeRepository = timeRepository
        // this.jogoRepository = jogoRepository
    }

  async execute(grupoId: string) {
    const grupo = await this.grupoRepository.findById(grupoId);
    if (!grupo) throw new NotFoundError('Grupo');

    const times = await this.timeRepository.findByGroup(grupoId);
    //const jogos = await this.jogoRepository.findByGrupoId(grupoId);

    //return calcularClassificacao(times, jogos);
  }
} */