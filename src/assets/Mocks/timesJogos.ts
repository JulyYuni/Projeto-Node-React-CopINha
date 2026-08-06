// src/data/mockData.ts

import { Group, Team, Game } from "../types/types";

import countryFlag from "../assets/TEST/BR.png";
import croaciaFlag from "../assets/TEST/HR.png";
import marrocosFlag from "../assets/TEST/MA.png";
import camaroesFlag from "../assets/TEST/CM.png";

import argentinaFlag from "../assets/TEST/AR.png";
import mexicoFlag from "../assets/TEST/MX.png";
import poloniaFlag from "../assets/TEST/PL.png";
import arabiaFlag from "../assets/TEST/SA.png";


// =========================
// GRUPO A - TIMES
// =========================

const brasil: Team = {
    id: 1,
    name: "Brasil",
    abbreviation: "BRA",
    flag: brasilFlag,
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
    flag: croaciaFlag,
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
    flag: marrocosFlag,
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
    flag: camaroesFlag,
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

        group: "A",

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

        group: "A",

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

        group: "A",

        stadium: "Mineirão",
        city: "Belo Horizonte",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: brasil,
        awayTeam: marrocos,

        homeScore: null,
        awayScore: null,
    },

    {
        id: 4,

        group: "A",

        stadium: "Arena Pernambuco",
        city: "Recife",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: croacia,
        awayTeam: camaroes,

        homeScore: null,
        awayScore: null,
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
    flag: argentinaFlag,
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
    flag: mexicoFlag,
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
    flag: poloniaFlag,
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
    flag: arabiaFlag,
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

        group: "B",

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

        group: "B",

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

        group: "B",

        stadium: "Castelão",
        city: "Fortaleza",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: argentina,
        awayTeam: polonia,

        homeScore: null,
        awayScore: null,
    },

    {
        id: 8,

        group: "B",

        stadium: "Arena da Baixada",
        city: "Curitiba",

        date: "22/10/2026",
        time: "19:00",

        status: "pending",

        prediction: null,

        homeTeam: mexico,
        awayTeam: arabia,

        homeScore: null,
        awayScore: null,
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
    flag: francaFlag,
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
    flag: dinamarcaFlag,
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
    flag: tunisiaFlag,
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
    flag: australiaFlag,
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
        group: "C",
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
        group: "C",
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
        group: "C",
        stadium: "Mineirão",
        city: "Belo Horizonte",
        date: "24/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: franca,
        awayTeam: tunisia,
        homeScore: null,
        awayScore: null,
    },
    {
        id: 12,
        group: "C",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "24/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: dinamarca,
        awayTeam: australia,
        homeScore: null,
        awayScore: null,
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
    flag: portugalFlag,
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
    flag: uruguaiFlag,
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
    flag: ganaFlag,
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
    flag: coreiaFlag,
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
        group: "D",
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
        group: "D",
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
        group: "D",
        stadium: "Arena Pernambuco",
        city: "Recife",
        date: "25/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: portugal,
        awayTeam: gana,
        homeScore: null,
        awayScore: null,
    },
    {
        id: 16,
        group: "D",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "25/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: uruguai,
        awayTeam: coreia,
        homeScore: null,
        awayScore: null,
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
    flag: espanhaFlag,
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
    flag: alemanhaFlag,
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
    flag: japaoFlag,
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
    flag: costaRicaFlag,
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
        group: "E",
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
        group: "E",
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
        group: "E",
        stadium: "Maracanã",
        city: "Rio de Janeiro",
        date: "26/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: espanha,
        awayTeam: japao,
        homeScore: null,
        awayScore: null,
    },
    {
        id: 20,
        group: "E",
        stadium: "Arena Corinthians",
        city: "São Paulo",
        date: "26/10/2026",
        time: "16:00",
        status: "pending",
        prediction: null,
        homeTeam: alemanha,
        awayTeam: costaRica,
        homeScore: null,
        awayScore: null,
    },
];

export const groupE: Group = {
    id: "E",
    name: "Grupo E",
    teams: [espanha, alemanha, japao, costaRica],
    games: groupEGames,
};