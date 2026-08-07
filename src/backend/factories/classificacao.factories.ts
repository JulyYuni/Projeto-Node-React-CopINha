import { PrismaGrupoRepository } from '@/infra/database/prisma.repositories/prisma.grupo.repository';
import { PrismaTimeRepository } from '@/infra/database/prisma.repositories/prisma.time.repository';
import { ObterClassificacaoUseCase } from '@/application/classificacao.usecase';
import {PrismaJogosRepository} from '@/infra/database/prisma.jogos.reposity';

 export function makeObterClassificacaoUseCase(): ObterClassificacaoUseCase {
  const grupoRepository = new PrismaGrupoRepository();
  const timeRepository = new PrismaTimeRepository();
  const jogoRepository = new PrismaJogosRepository();
  return new ObterClassificacaoUseCase(grupoRepository, timeRepository, jogoRepository);
} 