
import styles from "./styles.module.css";

import { useState } from "react";
import AdminGamesTable from "../../../components/Admin/AdminGames/AdminGamesTable";
import { createEmptyGame } from "../../../utils/createEmptyGame";
import { games as initialGames, groups } from "../../../assets/Mocks/timesJogos";
import type { Game } from "../../../utils/types";

export default function AdminGames() {

    const [games, setGames] = useState<Game[]>(initialGames);
    const [creating, setCreating] = useState(false);
    const teams = groups.flatMap(group => group.teams);

    function handleSave(game: Game) {
        setGames(current =>
            current.map(g => g.id === game.id ? game : g)
        );
    }

    function handleDelete(id: number) {
        setGames(current =>
            current.filter(game => game.id !== id)
        );
    }

    function handleCreate(game: Game) {
        setGames(current => [...current, game]);
        setCreating(false);
    }

    function handleCancelCreate() {
        setCreating(false);
    }

    function handleNewGame() {
        if (creating) return;
        setCreating(true);
    }

    return (
        <section className={styles.adminGames}>

            <div className={styles.header}>
                <button
                    className={styles.newGameButton}
                    onClick={handleNewGame}
                >
                    <span>+</span>
                    <span>Novo jogo</span>
                </button>

            </div>

            <AdminGamesTable
                games={games}
                teams={teams}
                groups={groups}
                creating={creating}
                onCreate={handleCreate}
                onCancel={handleCancelCreate}
                onSave={handleSave}
                onDelete={handleDelete}
            />

        </section>
    );
}