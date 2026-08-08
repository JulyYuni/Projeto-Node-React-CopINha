// src/data/mockData.ts

import type { Group, Team, Game } from "../../utils/types.ts";

import countryFlag from "../TEST/BR.png";


// =========================
// GRUPO A - TIMES
// =========================

const brasil: Team = {
    id: 1,
    name: "Brasil",
    abbreviation: "BRA",
    flag: countryFlag,
    group: "A",

    position: 1,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: true,
};

const croacia: Team = {
    id: 2,
    name: "Croácia",
    abbreviation: "CRO",
    flag: countryFlag,
    group: "A",

    position: 2,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: true,
};

const marrocos: Team = {
    id: 3,
    name: "Marrocos",
    abbreviation: "MAR",
    flag: countryFlag,
    group: "A",

    position: 3,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: false,
};

const camaroes: Team = {
    id: 4,
    name: "Camarões",
    abbreviation: "CMR",
    flag: countryFlag,
    group: "A",

    position: 4,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: false,
};


// =========================
// GRUPO A - JOGOS
// =========================

const groupAGames: Game[] = [
    {
        id: 1,

        group: "Grupo A",

        stadium: "Maracanã",
        city: "Rio de Janeiro",

        date: "18/10/2026",
        time: "16:00",

        status: "finished",

        prediction: null,

        homeTeam: brasil,
        awayTeam: croacia,

        homeScore: 2,
        awayScore: 1,
    },

    {
        id: 2,

        group: "Grupo A",

        stadium: "Arena Fonte Nova",
        city: "Salvador",

        date: "19/10/2026",
        time: "16:00",

        status: "finished",

        prediction: null,

        homeTeam: marrocos,
        awayTeam: camaroes,

        homeScore: 1,
        awayScore: 1,
    },

    {
        id: 3,

        group: "Grupo A",

        stadium: "Mineirão",
        city: "Belo Horizonte",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: brasil,
        awayTeam: marrocos,

        homeScore: 2,
        awayScore: 0,
    },

    {
        id: 4,

        group: "Grupo A",

        stadium: "Arena Pernambuco",
        city: "Recife",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: croacia,
        awayTeam: camaroes,

        homeScore: 1,
        awayScore: 2,
    },
];


// =========================
// GRUPO A
// =========================

export const groupA: Group = {
    id: "A",
    name: "Grupo A",

    teams: [
        brasil,
        croacia,
        marrocos,
        camaroes,
    ],

    games: groupAGames,
};


// =========================
// GRUPO B - TIMES
// =========================

const argentina: Team = {
    id: 5,
    name: "Argentina",
    abbreviation: "ARG",
    flag: countryFlag,
    group: "B",

    position: 1,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: true,
};

const mexico: Team = {
    id: 6,
    name: "México",
    abbreviation: "MEX",
    flag: countryFlag,
    group: "B",

    position: 2,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: true,
};

const polonia: Team = {
    id: 7,
    name: "Polônia",
    abbreviation: "POL",
    flag: countryFlag,
    group: "B",

    position: 3,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: false,
};

const arabia: Team = {
    id: 8,
    name: "Arábia Saudita",
    abbreviation: "KSA",
    flag: countryFlag,
    group: "B",

    position: 4,

    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,

    points: 0,

    qualified: false,
};


// =========================
// GRUPO B - JOGOS
// =========================

const groupBGames: Game[] = [
    {
        id: 5,

        group: "Grupo B",

        stadium: "Arena Corinthians",
        city: "São Paulo",

        date: "18/10/2026",
        time: "16:00",

        status: "finished",

        prediction: null,

        homeTeam: argentina,
        awayTeam: mexico,

        homeScore: 3,
        awayScore: 0,
    },

    {
        id: 6,

        group: "Grupo B",

        stadium: "Beira-Rio",
        city: "Porto Alegre",

        date: "19/10/2026",
        time: "16:00",

        status: "finished",

        prediction: null,

        homeTeam: polonia,
        awayTeam: arabia,

        homeScore: 0,
        awayScore: 2,
    },

    {
        id: 7,

        group: "Grupo B",

        stadium: "Castelão",
        city: "Fortaleza",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: argentina,
        awayTeam: polonia,

        homeScore: 0,
        awayScore: 0,
    },

    {
        id: 8,

        group: "Grupo B",

        stadium: "Arena da Baixada",
        city: "Curitiba",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: mexico,
        awayTeam: arabia,

        homeScore: 1,
        awayScore: 1,
    },
];


// =========================
// GRUPO B
// =========================

export const groupB: Group = {
    id: "B",
    name: "Grupo B",

    teams: [
        argentina,
        mexico,
        polonia,
        arabia,
    ],

    games: groupBGames,
};

// =========================
// GRUPO C - TIMES
// =========================

const franca: Team = {
    id: 9,
    name: "França",
    abbreviation: "FRA",
    flag: countryFlag,
    group: "C",
    position: 1,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const dinamarca: Team = {
    id: 10,
    name: "Dinamarca",
    abbreviation: "DEN",
    flag: countryFlag,
    group: "C",
    position: 2,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const tunisia: Team = {
    id: 11,
    name: "Tunísia",
    abbreviation: "TUN",
    flag: countryFlag,
    group: "C",
    position: 3,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

const australia: Team = {
    id: 12,
    name: "Austrália",
    abbreviation: "AUS",
    flag: countryFlag,
    group: "C",
    position: 4,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

// =========================
// GRUPO C - JOGOS
// =========================

const groupCGames: Game[] = [
    {
        id: 9,
        group: "Grupo C",
        stadium: "Arena Amazônia",
        city: "Manaus",
        date: "20/10/2026",
        time: "16:00",
        status: "finished",
        prediction: null,
        homeTeam: franca,
        awayTeam: dinamarca,
        homeScore: 2,
        awayScore: 2,
    },
    {
        id: 10,
        group: "Grupo C",
        stadium: "Arena Pantanal",
        city: "Cuiabá",
        date: "20/10/2026",
        time: "20:00",
        status: "finished",
        prediction: null,
        homeTeam: tunisia,
        awayTeam: australia,
        homeScore: 0,
        awayScore: 1,
    },
    {
        id: 11,
        group: "Grupo C",
        stadium: "Mineirão",
        city: "Belo Horizonte",
        date: "24/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: franca,
        awayTeam: tunisia,
        homeScore: 1,
        awayScore: 1,
    },
    {
        id: 12,
        group: "Grupo C",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "24/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: dinamarca,
        awayTeam: australia,
        homeScore: 1,
        awayScore: 1,
    },
];

export const groupC: Group = {
    id: "C",
    name: "Grupo C",
    teams: [franca, dinamarca, tunisia, australia],
    games: groupCGames,
};

// =========================
// GRUPO D - TIMES
// =========================

const portugal: Team = {
    id: 13,
    name: "Portugal",
    abbreviation: "POR",
    flag: countryFlag,
    group: "D",
    position: 1,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const uruguai: Team = {
    id: 14,
    name: "Uruguai",
    abbreviation: "URU",
    flag: countryFlag,
    group: "D",
    position: 2,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const gana: Team = {
    id: 15,
    name: "Gana",
    abbreviation: "GHA",
    flag: countryFlag,
    group: "D",
    position: 3,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

const coreia: Team = {
    id: 16,
    name: "Coreia do Sul",
    abbreviation: "KOR",
    flag: countryFlag,
    group: "D",
    position: 4,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

const groupDGames: Game[] = [
    {
        id: 13,
        group: "Grupo D",
        stadium: "Arena Fonte Nova",
        city: "Salvador",
        date: "21/10/2026",
        time: "16:00",
        status: "finished",
        prediction: null,
        homeTeam: portugal,
        awayTeam: uruguai,
        homeScore: 1,
        awayScore: 0,
    },
    {
        id: 14,
        group: "Grupo D",
        stadium: "Arena Castelão",
        city: "Fortaleza",
        date: "21/10/2026",
        time: "20:00",
        status: "finished",
        prediction: null,
        homeTeam: gana,
        awayTeam: coreia,
        homeScore: 1,
        awayScore: 1,
    },
    {
        id: 15,
        group: "Grupo D",
        stadium: "Arena Pernambuco",
        city: "Recife",
        date: "25/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: portugal,
        awayTeam: gana,
        homeScore: 0,
        awayScore: 1,
    },
    {
        id: 16,
        group: "Grupo D",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "25/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: uruguai,
        awayTeam: coreia,
        homeScore: 0,
        awayScore: 0,
    },
];

export const groupD: Group = {
    id: "D",
    name: "Grupo D",
    teams: [portugal, uruguai, gana, coreia],
    games: groupDGames,
};

// =========================
// GRUPO E - TIMES
// =========================

const espanha: Team = {
    id: 17,
    name: "Espanha",
    abbreviation: "ESP",
    flag: countryFlag,
    group: "E",
    position: 1,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const alemanha: Team = {
    id: 18,
    name: "Alemanha",
    abbreviation: "GER",
    flag: countryFlag,
    group: "E",
    position: 2,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: true,
};

const japao: Team = {
    id: 19,
    name: "Japão",
    abbreviation: "JPN",
    flag: countryFlag,
    group: "E",
    position: 3,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

const costaRica: Team = {
    id: 20,
    name: "Costa Rica",
    abbreviation: "CRC",
    flag: countryFlag,
    group: "E",
    position: 4,
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    qualified: false,
};

const groupEGames: Game[] = [
    {
        id: 17,
        group: "Grupo E",
        stadium: "Mineirão",
        city: "Belo Horizonte",
        date: "22/10/2026",
        time: "16:00",
        status: "finished",
        prediction: null,
        homeTeam: espanha,
        awayTeam: alemanha,
        homeScore: 1,
        awayScore: 1,
    },
    {
        id: 18,
        group: "Grupo E",
        stadium: "Arena Pantanal",
        city: "Cuiabá",
        date: "22/10/2026",
        time: "20:00",
        status: "finished",
        prediction: null,
        homeTeam: japao,
        awayTeam: costaRica,
        homeScore: 2,
        awayScore: 0,
    },
    {
        id: 19,
        group: "Grupo E",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "26/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: espanha,
        awayTeam: japao,
        homeScore: 3,
        awayScore: 1,
    },
    {
        id: 20,
        group: "Grupo E",
        stadium: "Arena Corinthians",
        city: "São Paulo",
        date: "26/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: alemanha,
        awayTeam: costaRica,
        homeScore: 2,
        awayScore: 1,
    },
];

export const groupE: Group = {
    id: "E",
    name: "Grupo E",
    teams: [espanha, alemanha, japao, costaRica],
    games: groupEGames,
};

// ===========================================
// LISTA COM TODOS OS GRUPOS
// ===========================================

export const groups: Group[] = [
    groupA,
    groupB,
    groupC,
    groupD,
    groupE,
];


// ===========================================
// LISTA COM TODOS OS TIMES
// ===========================================

export const teams: Team[] = groups.flatMap(group => group.teams);


// ===========================================
// LISTA COM TODOS OS JOGOS
// ===========================================

export const games: Game[] = groups.flatMap(group => group.games);


// ===========================================
// JOGOS ENCERRADOS
// ===========================================

export const finishedGames: Game[] =
    games.filter(game => game.status === "finished");


// ===========================================
// PRÓXIMOS JOGOS
// ===========================================

export const pendingGames: Game[] =
    games.filter(game => game.status === "pending");


// ===========================================
// ÚLTIMO RESULTADO
// ===========================================

export const lastResult: Game | undefined =
    finishedGames[finishedGames.length - 1];