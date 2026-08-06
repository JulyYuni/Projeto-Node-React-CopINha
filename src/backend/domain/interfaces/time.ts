export interface Time {
    id: string;
    nome: string;
    sigla: string;
    bandeira: string;
    grupoId: string;
    golsPro: number;
    golsContra: number;
    pontos: number;
    classificado: boolean;
    createdAt: Date;
    updatedAt: Date;
}

