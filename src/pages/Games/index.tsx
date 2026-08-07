
import styles from "./styles.module.css";

import UltimoResultado from "../../components/UltimoResultado";
import GroupClassificationHeader from "../../components/Groups/GroupClassificationHeader";
import GameCard from "../../components/Games/GameCard";
import GameNavigationBar from "../../components/Games/GameNavigationBar";

import type { Game } from "../../../utils/types.ts";

import { useState } from "react";
import { games, finishedGames, pendingGames } from "../../assets/Mocks/timesJogos.ts";

export default function Games() {
    const [filter, setFilter] = useState("all");

    let filteredGames = games;

    if (filter === "finished") {
        filteredGames = finishedGames;
    }

    if (filter === "pending") {
        filteredGames = pendingGames;
    }

    return (
        <>
            <UltimoResultado />
            <GroupClassificationHeader />

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