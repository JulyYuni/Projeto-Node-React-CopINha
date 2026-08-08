import styles from "./styles.module.css";
import locationIcon from "../../../assets/images/games/icon-location.svg";

import type { Game } from "../../../utils/types.ts";

interface GameCardProps {
    game: Game;
}
export default function GameCard({ game }: GameCardProps) {
    return (
        <div className={styles.gameCard}>
            <div className={styles.gameCardHeader}>
                <span className={styles.gameCardGroup}>{game.group}</span>

                <div className={styles.gameCardCity}>
                    <img src={locationIcon} alt="Local" />
                    <span>{game.city}</span>
                </div>
            </div>

            <div className={styles.gameCardContent}>
                <div className={styles.gameCardTeam}>
                    <img src={game.homeTeam.flag} alt={game.homeTeam.name} />
                    <div>
                        <span className={styles.gameCardTeamName}>{game.homeTeam.name}</span>
                        <span className={styles.gameCardTeamAbbreviation}>{game.homeTeam.abbreviation}</span>
                    </div>
                </div>

                <div className={styles.gameCardScore}>
                    {game.homeScore} – {game.awayScore}
                </div>

                <div className={styles.gameCardTeam}>
                    <div>
                        <span className={styles.gameCardTeamName}>{game.awayTeam.name}</span>
                        <span className={styles.gameCardTeamAbbreviation}>{game.awayTeam.abbreviation}</span>
                    </div>

                    <img src={game.awayTeam.flag} alt={game.awayTeam.name} />
                </div>
            </div>

            <div className={styles.gameCardFooter}>
                <img src={locationIcon} alt="Estádio" />
                <span>{game.stadium}</span>
            </div>
        </div>
    );
}