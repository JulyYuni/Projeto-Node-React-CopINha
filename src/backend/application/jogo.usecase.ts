import type { Prisma } from "../../@types/prisma/browser";
import type { Jogo } from "../../@types/prisma/client";
import type { JogoUpdateInput } from "../../@types/prisma/models";
import type { JogoRepository, ListJogosFilters } from "@/domain/repositories/jogo.repository";

export class CreateJogoUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(data: Prisma.JogoUncheckedCreateInput): Promise<Jogo> {
        if (data.timeIdCasa === data.timeIdFora) {
            throw new Error("O time da casa e o time visitante não podem ser o mesmo.");
        }

        return await this.jogoRepository.create(data);
    }
}

export class ListJogosUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(filters?: ListJogosFilters): Promise<Jogo[]> {
        const jogos = await this.jogoRepository.list(filters);
        return jogos ?? [];
    }
}

export class GetJogoByIdUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(id: string): Promise<Jogo> {
        const jogo = await this.jogoRepository.getById(id);

        if (!jogo) {
            throw new Error("Jogo não encontrado.");
        }

        return jogo;
    }
}

export class UpdateJogoUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(id: string, data: JogoUpdateInput): Promise<Jogo> {
        const jogoExiste = await this.jogoRepository.getById(id);

        if (!jogoExiste) {
            throw new Error("Não é possível atualizar: Jogo não encontrado.");
        }

        return await this.jogoRepository.update(id, data);
    }
}

export class LancarResultadoJogoUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(id: string, golsCasa: number, golsFora: number): Promise<Jogo> {
        const jogo = await this.jogoRepository.getById(id);

        if (!jogo) {
            throw new Error("Jogo não encontrado.");
        }

        if (golsCasa < 0 || golsFora < 0) {
            throw new Error("A quantidade de gols não pode ser negativa.");
        }

        const jogoAtualizado = await this.jogoRepository.lancarResultado(id, golsCasa, golsFora);

        await this.jogoRepository.recalcularClassificacaoGrupo(jogo.grupoId);

        return jogoAtualizado;
    }
}

export class DeleteJogoUseCase {
    private jogoRepository: JogoRepository;

    constructor(jogoRepository: JogoRepository) {
        this.jogoRepository = jogoRepository;
    }

    async execute(id: string): Promise<void> {
        const jogoExiste = await this.jogoRepository.getById(id);

        if (!jogoExiste) {
            throw new Error("Não é possível deletar: Jogo não encontrado.");
        }

        await this.jogoRepository.delete(id);
    }
}