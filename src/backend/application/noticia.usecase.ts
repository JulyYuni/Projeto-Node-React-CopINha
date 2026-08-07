import type { NoticiaCreateInput, NoticiaUpdateInput } from "../../@types/prisma/models";
import type { Noticia } from "../../@types/prisma/client";
import type { NoticiaRepository } from "@/domain/repositories/noticia.repository";

export class CreateNoticiaUseCase {
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    async execute(data: NoticiaCreateInput): Promise<Noticia> {
        if (!data.titulo || !data.corpoDaNoticia) {
            throw new Error("Título e conteúdo são obrigatórios.");
        }

        return await this.noticiaRepository.create(data);
    }
}

export class ListNoticiasUseCase {
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    async execute(grupoId?: string): Promise<Noticia[]> {
        if (grupoId) {
            return await this.noticiaRepository.listByGrupoId(grupoId);
        }
        
        return await this.noticiaRepository.list();
    }
}

export class GetNoticiaByIdUseCase {
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    async execute(id: string): Promise<Noticia> {
        const noticia = await this.noticiaRepository.getById(id);

        if (!noticia) {
            throw new Error("Notícia não encontrada.");
        }

        return noticia;
    }
}

export class UpdateNoticiaUseCase {
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    async execute(id: string, data: NoticiaUpdateInput): Promise<Noticia> {
        const noticiaExiste = await this.noticiaRepository.getById(id);

        if (!noticiaExiste) {
            throw new Error("Não é possível atualizar: Notícia não encontrada.");
        }

        return await this.noticiaRepository.update(id, data);
    }
}

export class DeleteNoticiaUseCase {
    private noticiaRepository: NoticiaRepository;

    constructor(noticiaRepository: NoticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    async execute(id: string): Promise<void> {
        const noticiaExiste = await this.noticiaRepository.getById(id);
        
        if (!noticiaExiste) {
            throw new Error("Não é possível deletar: Notícia não encontrada.");
        }

        await this.noticiaRepository.delete(id);
    }
}