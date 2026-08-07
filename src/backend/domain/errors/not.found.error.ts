import { AppError } from './app.error';

export class NotFoundError extends AppError {
  constructor(entidade: string = 'Recurso') {
    super(`${entidade} não encontrado`, 404);
    this.name = 'NotFoundError';
  }
}