import { z } from 'zod';

export const createGrupoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
});

export const updateGrupoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').optional(),
});