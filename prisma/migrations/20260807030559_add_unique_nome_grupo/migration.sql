-- CreateEnum
CREATE TYPE "AcaoLog" AS ENUM ('CRIACAO', 'EDICAO', 'EXCLUSAO');

-- CreateEnum
CREATE TYPE "EntidadeLog" AS ENUM ('TIME', 'JOGO', 'NOTICIA', 'GRUPO');

-- CreateEnum
CREATE TYPE "StatusJogo" AS ENUM ('PROXIMO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "bandeira" TEXT NOT NULL,
    "grupoId" TEXT NOT NULL,
    "vitorias" INTEGER NOT NULL DEFAULT 0,
    "empates" INTEGER NOT NULL DEFAULT 0,
    "derrotas" INTEGER NOT NULL DEFAULT 0,
    "golsPro" INTEGER NOT NULL DEFAULT 0,
    "golsContra" INTEGER NOT NULL DEFAULT 0,
    "saldoGols" INTEGER NOT NULL DEFAULT 0,
    "pontos" INTEGER NOT NULL DEFAULT 0,
    "classificado" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogos" (
    "id" TEXT NOT NULL,
    "status" "StatusJogo" NOT NULL DEFAULT 'PROXIMO',
    "grupoId" TEXT NOT NULL,
    "timeIdCasa" TEXT NOT NULL,
    "timeIdFora" TEXT NOT NULL,
    "golsCasa" INTEGER,
    "golsFora" INTEGER,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jogos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "noticias" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "subTitulo" TEXT NOT NULL,
    "corpoDaNoticia" TEXT NOT NULL,
    "imagemCapa" TEXT NOT NULL,
    "tempoDeLeituraMin" INTEGER NOT NULL,
    "autor" TEXT NOT NULL,
    "grupoId" TEXT,
    "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogAdmin" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "acao" "AcaoLog" NOT NULL,
    "entidade" "EntidadeLog" NOT NULL,
    "entidadeId" TEXT,
    "detalhes" JSONB,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "grupos_nome_key" ON "grupos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "times_nome_key" ON "times"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "times_sigla_key" ON "times"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "times_nome_grupoId_key" ON "times"("nome", "grupoId");

-- CreateIndex
CREATE INDEX "jogos_status_idx" ON "jogos"("status");

-- CreateIndex
CREATE INDEX "jogos_grupoId_idx" ON "jogos"("grupoId");

-- CreateIndex
CREATE INDEX "noticias_publicadoEm_idx" ON "noticias"("publicadoEm");

-- CreateIndex
CREATE INDEX "noticias_grupoId_idx" ON "noticias"("grupoId");

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogos" ADD CONSTRAINT "jogos_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogos" ADD CONSTRAINT "jogos_timeIdCasa_fkey" FOREIGN KEY ("timeIdCasa") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogos" ADD CONSTRAINT "jogos_timeIdFora_fkey" FOREIGN KEY ("timeIdFora") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "noticias" ADD CONSTRAINT "noticias_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "grupos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAdmin" ADD CONSTRAINT "LogAdmin_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
