export interface Noticia {
  id: string;
  titulo: string;
  subTitulo: string;
  corpoDaNoticia: string;
  imagemCapa: string;
  tempoDeLeituraMin: number;
  autor: string;
  grupoId: string | null;
  publicadoEm: Date;
  atualizadoEm: Date;
}
 