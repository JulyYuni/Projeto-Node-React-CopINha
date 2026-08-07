import { Roles, StatusJogo } from "../src/@types/prisma/enums.ts";
import { env } from "../src/backend/env/index.ts";
import { prisma } from "../src/backend/libs/prisma.js";
import { hash } from "bcryptjs";


interface TimeSeed {
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

interface GrupoSeed {
	id: string;
	nome: string;
	createdAt: Date;
	times: TimeSeed[];
	jogos: unknown[]; 
}

interface JogoSeed {
	id: string;
	status: StatusJogo;
	grupoId: string;
	timeIdCasa: string;
	timeIdFora: string;
	golsCasa: number | null;
	golsFora: number | null;
	data: Date;
	local: string;
}

const grupos: GrupoSeed[] = [
	{
		id: "grupo-a",
		nome: "Grupo A",
		createdAt: new Date(),
		times: [
			{
				id: "bra",
				nome: "Brasil",
				sigla: "BRA",
				bandeira: "https://flagcdn.com/w320/br.png",
				grupoId: "grupo-a",
				vitorias: 3,
				empates: 0,
				derrotas: 0,
				golsPro: 8,
				golsContra: 1,
				pontos: 9,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "fra",
				nome: "França",
				sigla: "FRA",
				bandeira: "https://flagcdn.com/w320/fr.png",
				grupoId: "grupo-a",
				vitorias: 2,
				empates: 0,
				derrotas: 1,
				golsPro: 5,
				golsContra: 3,
				pontos: 6,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "jpn",
				nome: "Japão",
				sigla: "JPN",
				bandeira: "https://flagcdn.com/w320/jp.png",
				grupoId: "grupo-a",
				vitorias: 1,
				empates: 0,
				derrotas: 2,
				golsPro: 2,
				golsContra: 5,
				pontos: 3,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "cmr",
				nome: "Camarões",
				sigla: "CMR",
				bandeira: "https://flagcdn.com/w320/cm.png",
				grupoId: "grupo-a",
				vitorias: 0,
				empates: 0,
				derrotas: 3,
				golsPro: 1,
				golsContra: 7,
				pontos: 0,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		jogos: [],
	},
	{
		id: "grupo-b",
		nome: "Grupo B",
		createdAt: new Date(),
		times: [
			{
				id: "arg",
				nome: "Argentina",
				sigla: "ARG",
				bandeira: "https://flagcdn.com/w320/ar.png",
				grupoId: "grupo-b",
				vitorias: 2,
				empates: 1,
				derrotas: 0,
				golsPro: 6,
				golsContra: 2,
				pontos: 7,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "esp",
				nome: "Espanha",
				sigla: "ESP",
				bandeira: "https://flagcdn.com/w320/es.png",
				grupoId: "grupo-b",
				vitorias: 1,
				empates: 2,
				derrotas: 0,
				golsPro: 4,
				golsContra: 2,
				pontos: 5,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "mar",
				nome: "Marrocos",
				sigla: "MAR",
				bandeira: "https://flagcdn.com/w320/ma.png",
				grupoId: "grupo-b",
				vitorias: 1,
				empates: 1,
				derrotas: 1,
				golsPro: 3,
				golsContra: 3,
				pontos: 4,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "can",
				nome: "Canadá",
				sigla: "CAN",
				bandeira: "https://flagcdn.com/w320/ca.png",
				grupoId: "grupo-b",
				vitorias: 0,
				empates: 0,
				derrotas: 3,
				golsPro: 1,
				golsContra: 7,
				pontos: 0,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		jogos: [],
	},
	{
		id: "grupo-c",
		nome: "Grupo C",
		createdAt: new Date(),
		times: [
			{
				id: "ger",
				nome: "Alemanha",
				sigla: "GER",
				bandeira: "https://flagcdn.com/w320/de.png",
				grupoId: "grupo-c",
				vitorias: 2,
				empates: 1,
				derrotas: 0,
				golsPro: 7,
				golsContra: 3,
				pontos: 7,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "uru",
				nome: "Uruguai",
				sigla: "URU",
				bandeira: "https://flagcdn.com/w320/uy.png",
				grupoId: "grupo-c",
				vitorias: 1,
				empates: 1,
				derrotas: 1,
				golsPro: 4,
				golsContra: 4,
				pontos: 4,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "kor",
				nome: "Coreia do Sul",
				sigla: "KOR",
				bandeira: "https://flagcdn.com/w320/kr.png",
				grupoId: "grupo-c",
				vitorias: 1,
				empates: 0,
				derrotas: 2,
				golsPro: 3,
				golsContra: 5,
				pontos: 3,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "usa",
				nome: "Estados Unidos",
				sigla: "USA",
				bandeira: "https://flagcdn.com/w320/us.png",
				grupoId: "grupo-c",
				vitorias: 0,
				empates: 2,
				derrotas: 1,
				golsPro: 2,
				golsContra: 4,
				pontos: 2,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		jogos: [],
	},
	{
		id: "grupo-d",
		nome: "Grupo D",
		createdAt: new Date(),
		times: [
			{
				id: "por",
				nome: "Portugal",
				sigla: "POR",
				bandeira: "https://flagcdn.com/w320/pt.png",
				grupoId: "grupo-d",
				vitorias: 3,
				empates: 0,
				derrotas: 0,
				golsPro: 9,
				golsContra: 2,
				pontos: 9,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "ned",
				nome: "Holanda",
				sigla: "NED",
				bandeira: "https://flagcdn.com/w320/nl.png",
				grupoId: "grupo-d",
				vitorias: 2,
				empates: 0,
				derrotas: 1,
				golsPro: 6,
				golsContra: 4,
				pontos: 6,
				classificado: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "sen",
				nome: "Senegal",
				sigla: "SEN",
				bandeira: "https://flagcdn.com/w320/sn.png",
				grupoId: "grupo-d",
				vitorias: 1,
				empates: 0,
				derrotas: 2,
				golsPro: 4,
				golsContra: 6,
				pontos: 3,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "mex",
				nome: "México",
				sigla: "MEX",
				bandeira: "https://flagcdn.com/w320/mx.png",
				grupoId: "grupo-d",
				vitorias: 0,
				empates: 0,
				derrotas: 3,
				golsPro: 1,
				golsContra: 8,
				pontos: 0,
				classificado: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		jogos: [],
	},
];



async function seedAdmin() {
	await prisma.user.upsert({
		where: {
			email: "admin@example.com",
		},
		update: {},
		create: {
			id: "000000-000000-000000-000000000001",
			nome: "admin",
			email: "admin@example.com",
			senha: await hash("123123123", env.HASH_SALT_ROUNDS),
			role: Roles.ADMIN,
		},
	});

	console.log("Admin seeded sucessfully.");
}



async function seedGrupos() {
	for (const grupo of grupos) {
		const { times, jogos, ...grupoData } = grupo;

		await prisma.grupo.upsert({
			where: { id: grupo.id },
			update: grupoData,
			create: grupoData,
		});

		for (const time of times) {
			const { grupoId, ...timeData } = time;

			await prisma.time.upsert({
				where: { id: time.id },
				update: {
					...timeData,
					grupo: { connect: { id: grupoId } },
				},
				create: {
					...timeData,
					grupo: { connect: { id: grupoId } },
				},
			});
		}

		console.log(`✔ ${grupo.nome}: ${times.length} times seedados.`);
	}

	console.log("Grupos e times seedados com sucesso.");
}



export async function seed() {
	await seedAdmin();
	await seedGrupos();
}

seed()
	.then(() => {
		prisma.$disconnect();
		process.exit(0);
	})
	.catch((error) => {
		console.error("Error seeding database", error);
		prisma.$disconnect();
		process.exit(1);
	});