import type { MatchPrediction, Team } from "./types.ts";

export function simulateMatch(
    homeTeam: Team,
    awayTeam: Team,
    prediction: MatchPrediction
) {

    homeTeam.matches++;
    awayTeam.matches++;

    switch (prediction) {

        case "home":

            homeTeam.wins++;
            awayTeam.losses++;

            homeTeam.goalsFor++;
            awayTeam.goalsAgainst++;

            homeTeam.points += 3;

            break;

        case "draw":

            homeTeam.draws++;
            awayTeam.draws++;

            homeTeam.goalsFor++;
            homeTeam.goalsAgainst++;

            awayTeam.goalsFor++;
            awayTeam.goalsAgainst++;

            homeTeam.points++;
            awayTeam.points++;

            break;

        case "away":

            awayTeam.wins++;
            homeTeam.losses++;

            awayTeam.goalsFor++;
            homeTeam.goalsAgainst++;

            awayTeam.points += 3;

            break;

    }

    homeTeam.goalDifference =
        homeTeam.goalsFor - homeTeam.goalsAgainst;

    awayTeam.goalDifference =
        awayTeam.goalsFor - awayTeam.goalsAgainst;

}