export type MatchStatus = "finished" | "pending";

export type MatchPrediction = "home" | "draw" | "away" | null;

export interface Team {
    id: number;

    name: string;
    abbreviation: string;
    flag: string;

    group: string;

    position: number;

    matches: number;
    wins: number;
    draws: number;
    losses: number;

    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;

    points: number;

    qualified: boolean;
}

export interface Game {
    id: number;

    group: string;

    stadium: string;
    city: string;

    date: string;
    time: string;

    status: MatchStatus;

    prediction: MatchPrediction;

    homeTeam: Team;
    awayTeam: Team;

    homeScore: number | null;
    awayScore: number | null;
}

export interface Group {
    id: string;
    name: string;

    teams: Team[];
    games: Game[];
}