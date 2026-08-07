import { useState } from "react";

import styles from "./styles.module.css";

import type { Game, Team, Group } from "../../../../utils/types";

import editIcon from "../../../../assets/icons/edit.svg";
import deleteIcon from "../../../../assets/icons/trash.svg";

interface AdminGameRowProps {
    game: Game;
    teams: Team[];
    groups: Group[];

    onSave: (game: Game) => void;
    onDelete: (id: number) => void;
}

export default function AdminGameRow({
    game,
    teams,
    groups,
    onSave,
    onDelete,
}: AdminGameRowProps) {

    const [editing, setEditing] = useState(false);

    const [editedGame, setEditedGame] = useState<Game>(game);

    function updateField<K extends keyof Game>(
        field: K,
        value: Game[K]
    ) {
        setEditedGame({
            ...editedGame,
            [field]: value,
        });
    }

    function updateHomeTeam(teamId: number) {
        const team = teams.find(team => team.id === teamId);

        if (!team) return;

        setEditedGame({
            ...editedGame,
            homeTeam: team,
        });
    }

    function updateAwayTeam(teamId: number) {
        const team = teams.find(team => team.id === teamId);

        if (!team) return;

        setEditedGame({
            ...editedGame,
            awayTeam: team,
        });
    }

    function save() {
        onSave(editedGame);
        setEditing(false);
    }

    function cancel() {
        setEditedGame(game);
        setEditing(false);
    }

    return (
        <div className={styles.adminGameRow}>

            <div className={styles.matchColumn}>

                {editing ? (
                    <>
                        <select
                            value={editedGame.homeTeam.id}
                            onChange={(e) => updateHomeTeam(Number(e.target.value))}
                        >
                            {teams.map(team => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>

                        <span className={styles.vs}>vs</span>

                        <select
                            value={editedGame.awayTeam.id}
                            onChange={(e) => updateAwayTeam(Number(e.target.value))}
                        >
                            {teams.map(team => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={editedGame.group}
                            onChange={(e) => updateField("group", e.target.value)}
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
                    </>
                ) : (
                    <>
                        <img
                            src={game.homeTeam.flag}
                            alt={game.homeTeam.name}
                            className={styles.flag}
                        />

                        <span className={styles.abbreviation}>{game.homeTeam.abbreviation}</span>

                        <span className={styles.vs}>vs</span>
                    
                        <span className={styles.abbreviation}>{game.awayTeam.abbreviation}</span>
                        
                        <img
                            src={game.awayTeam.flag}
                            alt={game.awayTeam.name}
                            className={styles.flag}
                        />

                        <span className={styles.group}>
                            {game.group}
                        </span>
                    </>
                )}

            </div>

            <div className={styles.scoreColumn}>

                {editing ? (
                    <>
                        <input className={styles.homeScore}
                            type="number"
                            value={editedGame.homeScore ?? ""}
                            onChange={(e) =>
                                updateField(
                                    "homeScore",
                                    Number(e.target.value)
                                )
                            }
                        />

                        <span>x</span>

                        <input className={styles.awayScore}
                            type="number"
                            value={editedGame.awayScore ?? ""}
                            onChange={(e) =>
                                updateField(
                                    "awayScore",
                                    Number(e.target.value)
                                )
                            }
                        />

                        <select className={styles.status}
                            value={editedGame.status}
                            onChange={(e) =>
                                updateField(
                                    "status",
                                    e.target.value as Game["status"]
                                )
                            }
                        >
                            <option value="finished">
                                Encerrado
                            </option>

                            <option value="pending">
                                Aguardando
                            </option>
                        </select>
                    </>
                ) : (
                    <>
                        {game.status === "finished" ? (
                            <>
                                <strong>
                                    {game.homeScore} - {game.awayScore}
                                </strong>

                                <span>
                                    {game.homeScore! > game.awayScore!
                                        ? "Casa venceu"
                                        : game.homeScore! < game.awayScore!
                                        ? "Visitante venceu"
                                        : "Empate"}
                                </span>
                            </>
                        ) : (
                            <span>Aguardando</span>
                        )}
                    </>
                )}

            </div>

            <div className={styles.stadiumColumn}>

                {editing ? (
                    <>
                        <input
                            value={editedGame.stadium}
                            onChange={(e) =>
                                updateField(
                                    "stadium",
                                    e.target.value
                                )
                            }
                        />

                        <input
                            value={editedGame.city}
                            onChange={(e) =>
                                updateField(
                                    "city",
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="date"
                            value={editedGame.date}
                            onChange={(e) =>
                                updateField(
                                    "date",
                                    e.target.value
                                )
                            }
                        />

                    </>
                ) : (
                    <>
                        <span>{game.stadium}</span>
                        <small>{game.city}</small>
                    </>
                )}

            </div>

            <div className={styles.actions}>

                {editing ? (
                    <div className={styles.saveCancelButtonsDiv}>
                        <button
                            onClick={save}
                            className={styles.saveButton}
                        >
                            Salvar
                        </button>

                        <button
                            onClick={cancel}
                            className={styles.cancelButton}
                        >
                            Cancelar
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={() => setEditing(true)}
                            className={styles.iconButton}
                        >
                            <img
                                src={editIcon}
                                alt="Editar"
                            />
                        </button>

                        <button
                            onClick={() => onDelete(game.id)}
                            className={styles.iconButton}
                        >
                            <img
                                src={deleteIcon}
                                alt="Excluir"
                            />
                        </button>
                    </>
                )}

            </div>

        </div>
    );
}