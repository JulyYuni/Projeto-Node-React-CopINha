import styles from "./styles.module.css";

import type { Game, MatchPrediction } from "../../../utils/types.ts";

interface PendingGameCardProps {
    game: Game;
    onPredictionChange: (gameId: number, prediction: MatchPrediction) => void;
}

export default function PendingGameCard({ game, onPredictionChange }: PendingGameCardProps) {
    return (
        <div className={styles.pendingGameCard}>

            <div className={styles.pendingGameCardContent}>
                <div className={styles.pendingGameCardTeam}>
                    <img src={game.homeTeam.flag} alt={game.homeTeam.name} className={styles.pendingGameCardFlag}/>
                    <div className={styles.pendingGameCardTeamColumn}>
                        <span className={styles.pendingGameCardName}>{game.homeTeam.name}</span>
                        <span className={styles.pendingGameCardAbbreviation}>{game.homeTeam.abbreviation}</span>
                    </div>
                </div>

                    <span className={styles.pendingGameCardVs}>VS</span>

                <div className={styles.pendingGameCardTeam}>
                    <div className={styles.pendingGameCardTeamColumn}>
                        <span className={styles.pendingGameCardName}>{game.awayTeam.name}</span>
                        <span className={styles.pendingGameCardAbbreviation}>{game.awayTeam.abbreviation}</span>

                    </div>
                    <img src={game.awayTeam.flag} alt={game.awayTeam.name} className={styles.pendingGameCardFlag}/>
                </div>
            </div>

            <div className={styles.pendingGameCardButtons}>
                <button className={`${styles.pendingGameCardButton} ${styles.home}`} onClick={() => onPredictionChange(game.id, "home")}>
                    <span>{game.homeTeam.name}</span>
                    <span>Vitória</span>
                </button>

                <button className={`${styles.pendingGameCardButton} ${styles.draw}`} onClick={() => onPredictionChange(game.id, "draw")}>
                    <span>Empate</span>
                    <span>1-1</span>
                </button>
                <button className={`${styles.pendingGameCardButton} ${styles.away}`} onClick={() => onPredictionChange(game.id, "away")}>
                    <span>{game.awayTeam.name}</span>
                    <span>Vitória</span>
                </button>
            </div>
        </div>
    );
}