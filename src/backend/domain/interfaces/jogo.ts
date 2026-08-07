import type { StatusJogo } from "../../../@types/prisma/enums"

export interface Jogos {

    id:string,
    status: StatusJogo,
    grupoId: string,
    
    timeIdCasa: string,
    timeIdFora: string,
    
    goalsCasa?: number,
    goalsFora?: number,

    data: Date
    local: string
}