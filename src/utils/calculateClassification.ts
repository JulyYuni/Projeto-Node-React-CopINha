import type { Game, MatchPrediction, Team } from "../utils/types.ts";
import { simulateMatch } from "./simulateMatch";

export function calculateClassification(
    originalTeams: Team[],
    games: Game[],
    predictions: Record<number, MatchPrediction>
): Team[] {

    const teams = originalTeams.map(team => ({
        ...team
    }));

    for (const game of games) {

        if (game.status === "finished") {
            continue;
        }

        const prediction = predictions[game.id];

        if (!prediction) {
            continue;
        }

        const homeTeam = teams.find(
            team => team.id === game.homeTeam.id
        );

        const awayTeam = teams.find(
            team => team.id === game.awayTeam.id
        );

        if (!homeTeam || !awayTeam) {
            continue;
        }

        simulateMatch(
            homeTeam,
            awayTeam,
            prediction
        );

    }

    teams.sort((teamA, teamB) => {

        if (teamB.points !== teamA.points) {
            return teamB.points - teamA.points;
        }

        if (teamB.goalDifference !== teamA.goalDifference) {
            return teamB.goalDifference - teamA.goalDifference;
        }

        if (teamB.goalsFor !== teamA.goalsFor) {
            return teamB.goalsFor - teamA.goalsFor;
        }

        return teamA.name.localeCompare(teamB.name);

    });

    teams.forEach((team, index) => {

        team.position = index + 1;
        team.qualified = index < 2;

    });

    return teams;

}