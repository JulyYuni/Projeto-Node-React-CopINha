import type { Game, Team, Group } from "./types";

export function createEmptyGame(
    teams: Team[],
    groups: Group[],
    games: Game[]
): Game {

    const nextId = Math.max(...games.map(game => game.id)) + 1;

    return {
        id: nextId,

        group: groups[0].name,

        stadium: "",
        city: "",

        date: "",
        time: "",

        status: "pending",

        prediction: null,

        homeTeam: teams[0],
        awayTeam: teams[1],

        homeScore: null,
        awayScore: null,
    };
}