
import UltimoResultado from "../../components/UltimoResultado";
import GroupClassificationHeader from "../../components/Groups/GroupClassificationHeader";
import styles from "./styles.module.css";

import countryFlag from "../../assets/TEST/BR.png";
import countryFlag1 from "../../assets/TEST/HR.png";
import { useState } from "react";
import GameCard from "../../components/Games/GameCard";
import type { Game } from "../../components/Games/GameCard";
import GameNavigationBar from "../../components/Games/GameNavigationBar";
import type { GameFilter } from "../../components/Games/GameNavigationBar";

const exampleGame: Game = {
    id: 1,
    finished: true,
    group: "Grupo A",
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    homeScore: 3,
    awayScore: 1,

    homeTeam: {
        name: "Brasil",
        abbreviation: "BRA",
        flag: countryFlag,
    },

    awayTeam: {
        name: "Croácia",
        abbreviation: "CRO",
        flag: countryFlag1,
    },
};
const exampleGame1: Game = {
    id: 2,
    finished: true,
    group: "Grupo B",
    city: "Minas Gerais",
    stadium: "Mineirão",
    homeScore: 2,
    awayScore: 4,

    homeTeam: {
        name: "Japão",
        abbreviation: "JPN",
        flag: countryFlag,
    },

    awayTeam: {
        name: "Irlanda",
        abbreviation: "IRL",
        flag: countryFlag1,
    },
};

const games: Game[] = [
    exampleGame,
    { ...exampleGame, id: 2 },
    { ...exampleGame1, id: 3 },
    { ...exampleGame, id: 4, finished: false },
    { ...exampleGame, id: 5, finished: false },
    { ...exampleGame1, id: 6, finished: false },
    { ...exampleGame1, id: 7 },
    { ...exampleGame1, id: 8 },
    { ...exampleGame, id: 9, finished: false },
    { ...exampleGame1, id: 10, finished: false },
    { ...exampleGame1, id: 11, finished: false },
    { ...exampleGame, id: 13 },
    { ...exampleGame, id: 14 },
    { ...exampleGame1, id: 15, finished: false },
    { ...exampleGame1, id: 16, finished: false },
];

export default function Games() {
    const [filter, setFilter] = useState<GameFilter>("all");

    let filteredGames = games;

    if (filter === "finished") {
        filteredGames = games.filter(game => game.finished);
    }

    if (filter === "upcoming") {
        filteredGames = games.filter(game => !game.finished);
    }

    return (
        <>
            <UltimoResultado/>
            <GroupClassificationHeader/> 
            <GameNavigationBar
                currentFilter={filter}
                onChangeFilter={setFilter}
            />

            <div className={styles.gamesGrid}>
                {filteredGames.map(game => (
                    <GameCard
                        key={game.id}
                        game={game}
                    />
                ))}
            </div>
        </>
    );
}