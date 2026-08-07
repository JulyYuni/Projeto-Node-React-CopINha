import {z} from 'zod'

export const createTimeSchema = z.object({
    nome: z.string().min(3, 'Nome é obrigatório'),
    sigla: z.string().min(2, 'Sigla deve ter pelo menos 2 caracteres'),
    bandeira: z.string(),
    grupoId: z.uuid()
})

export const updateTimeSchema = z.object({
    nome: z.string().min(3, 'Nome é obrigatório').optional(),
    sigla: z.string().min(2, 'Sigla deve ter pelo menos 2 caracteres').optional(),
    bandeira: z.string().optional(),
    grupoId: z.uuid(),
    classificado: z.boolean().optional()
})