import styles from "./styles.module.css";

import type { Game, Team, Group } from "../../../../utils/types";

import AdminGameRow from "../AdminGameRow";
import AdminNewGameRow from "../AdminNewGameRow";

interface AdminGamesTableProps {
    games: Game[];
    teams: Team[];
    groups: Group[];

    creating: boolean;

    onCreate: (game: Game) => void;
    onSave: (game: Game) => void;
    onCancel: () => void;
    onDelete: (id: number) => void;
}

export default function AdminGamesTable({
    games,
    teams,
    groups,
    creating,
    onCreate,
    onCancel,
    onSave,
    onDelete,
}: AdminGamesTableProps) {

    return (
        <section className={styles.adminGamesTable}>

            <div className={styles.tableHeader}>
                <div>PARTIDA</div>
                <div>PLACAR</div>
                <div>ESTÁDIO</div>
                <div></div>
            </div>

            <div className={styles.tableBody}>

                {games.map(game => (
                    <AdminGameRow
                        key={game.id}
                        game={game}
                        teams={teams}
                        groups={groups}
                        onSave={onSave}
                        onDelete={onDelete}
                    />
                ))}

                {creating && (
                    <AdminNewGameRow
                        teams={teams}
                        groups={groups}
                        games={games}
                        onCreate={onCreate}
                        onCancel={onCancel}
                    />
                )}

            </div>

        </section>
    );
}