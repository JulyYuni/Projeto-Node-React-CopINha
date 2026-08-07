export interface Time {
    id: string;
    nome: string;
    sigla: string;
    bandeira: string;
    grupoId: string;
    vitorias: number;
    empates: number;
    derrotas: number;
    golsPro: number;
    golsContra: number;
    pontos: number;
    classificado: boolean;
    createdAt: Date;
    updatedAt: Date;
}

