import styles from "./styles.module.css";

import type { Game } from "../../../utils/types.ts";

interface FinishedGameCardProps {
    game: Game;
}

export default function FinishedGameCard({ game }: FinishedGameCardProps) {
    return (
        <div className={styles.finishedGameCard}>

            <div className={styles.finishedGameCardContent}>
                <div className={styles.finishedGameCardTeam}>
                    <img src={game.homeTeam.flag} alt={game.homeTeam.name} className={styles.finishedGameCardFlag}/>
                    <div className={styles.finishedGameCardTeamColumn}>
                        <span className={styles.finishedGameCardName}>{game.homeTeam.name}</span>
                        <span className={styles.finishedGameCardAbbreviation}>{game.homeTeam.abbreviation}</span>
                    </div>
                </div>

                <div className={styles.finishedGameCardScore}>
                    <div className={styles.finishedGameCardScoreDiv}>
                        <span className={styles.finishedGameCardGoals}>{game.homeScore}</span>
                        <span className={styles.finishedGameCardSeparator}>-</span>
                        <span className={styles.finishedGameCardGoals}>{game.awayScore}</span>
                    </div>
                    <div className={styles.finishedGameCardFooter}>
                        <span className={styles.finishedGameCardStatus}>Encerrado</span>
                    </div>
                </div>

                <div className={styles.finishedGameCardTeam}>
                    <div className={styles.finishedGameCardTeamColumn}>
                        <span className={styles.finishedGameCardName}>{game.homeTeam.name}</span>
                        <span className={styles.finishedGameCardAbbreviation}>{game.awayTeam.abbreviation}</span>
                    </div>
                    <img src={game.awayTeam.flag} alt={game.awayTeam.name} className={styles.finishedGameCardFlag}/>
                </div>
            </div>
        </div>
    );
}