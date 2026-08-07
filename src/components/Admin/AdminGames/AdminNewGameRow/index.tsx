import { useState } from "react";

import styles from "./styles.module.css";
import { createEmptyGame } from "../../../../utils/createEmptyGame";
import type { Game, Team, Group } from "../../../../utils/types";

interface AdminNewGameRowProps {
    teams: Team[];
    groups: Group[];
    games: Game[];

    onCreate: (game: Game) => void;
    onCancel: () => void;
}

export default function AdminNewGameRow({
    teams,
    groups,
    games,
    onCreate,
    onCancel,
}: AdminNewGameRowProps) {

    const [game, setGame] = useState<Game>(
    createEmptyGame(teams, groups, games)
    );

    function update<K extends keyof Game>(
        field: K,
        value: Game[K]
    ) {
        setGame({
            ...game,
            [field]: value,
        });
    }

    function changeHomeTeam(id: number) {
        const team = teams.find(team => team.id === id);

        if (!team) return;

        setGame({
            ...game,
            homeTeam: team,
        });
    }

    function changeAwayTeam(id: number) {
        const team = teams.find(team => team.id === id);

        if (!team) return;

        setGame({
            ...game,
            awayTeam: team,
        });
    }

    return (
        <div className={styles.adminGameRow}>

            <div className={styles.matchColumn}>

                <select
                    value={game.homeTeam.id}
                    onChange={(e) => changeHomeTeam(Number(e.target.value))}
                >
                    {teams.map(team => (
                        <option
                            key={team.id}
                            value={team.id}
                        >
                            {team.name}
                        </option>
                    ))}
                </select>

                <span className={styles.vs}>vs</span>

                <select
                    value={game.awayTeam.id}
                    onChange={(e) => changeAwayTeam(Number(e.target.value))}
                >
                    {teams.map(team => (
                        <option
                            key={team.id}
                            value={team.id}
                        >
                            {team.name}
                        </option>
                    ))}
                </select>

                <select
                    value={game.group}
                    onChange={(e) =>
                        update("group", e.target.value)
                    }
                >
                    {groups.map(group => (
                        <option
                            key={group.id}
                            value={group.name}
                        >
                            {group.name}
                        </option>
                    ))}
                </select>

            </div>

            <div className={styles.scoreColumn}>

                <input
                    type="number"
                    placeholder="0"
                    value={game.homeScore ?? ""}
                    onChange={(e) =>
                        update(
                            "homeScore",
                            e.target.value === ""
                                ? null
                                : Number(e.target.value)
                        )
                    }
                />

                <span className={styles.x}>x</span>

                <input
                    type="number"
                    placeholder="0"
                    value={game.awayScore ?? ""}
                    onChange={(e) =>
                        update(
                            "awayScore",
                            e.target.value === ""
                                ? null
                                : Number(e.target.value)
                        )
                    }
                />

                <select
                    value={game.status}
                    onChange={(e) =>
                        update(
                            "status",
                            e.target.value as Game["status"]
                        )
                    }
                >
                    <option value="pending">
                        Aguardando
                    </option>

                    <option value="finished">
                        Encerrado
                    </option>
                </select>

            </div>

            <div className={styles.stadiumColumn}>

                <input
                    placeholder="Estádio"
                    value={game.stadium}
                    onChange={(e) =>
                        update("stadium", e.target.value)
                    }
                />

                <input
                    placeholder="Cidade"
                    value={game.city}
                    onChange={(e) =>
                        update("city", e.target.value)
                    }
                />

                <input
                    type="date"
                    value={game.date}
                    onChange={(e) =>
                        update("date", e.target.value)
                    }
                />

                <input
                    type="time"
                    value={game.time}
                    onChange={(e) =>
                        update("time", e.target.value)
                    }
                />

            </div>

            <div className={styles.actions}>

                <button
                    className={styles.saveButton}
                    onClick={() => onCreate(game)}
                >
                    Criar
                </button>

                <button
                    className={styles.cancelButton}
                    onClick={onCancel}
                >
                    Cancelar
                </button>

            </div>

        </div>
    );
}