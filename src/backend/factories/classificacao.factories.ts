import { PrismaGrupoRepository } from '@/infra/database/prisma.grupo.repository';
import { PrismaTimeRepository } from '@/infra/database/prisma.time.repository';
import { ObterClassificacaoUseCase } from '@/application/classificacao.usecase';
//Importar PrismaJogoRepository

/* export function makeObterClassificacaoUseCase(): ObterClassificacaoUseCase {
  const grupoRepository = new PrismaGrupoRepository();
  const timeRepository = new PrismaTimeRepository();
  const jogoRepository = new PrismaJogoRepository();
  return new ObterClassificacaoUseCase(grupoRepository, timeRepository, jogoRepository);
} */