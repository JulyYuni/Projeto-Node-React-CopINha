import styles from "./styles.module.css";
import shield from "../../../assets/icons/shield.svg";

export interface Team {
  id: number;
  position: number;
  name: string;
  abbreviation: string;
  flag: string;

  matches: number;
  wins: number;
  draws: number;
  losses: number;

  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;

  qualified?: boolean;
}

interface GroupClassificationCardProps {
  groupName: string;
  teams: Team[];
}

export default function GroupClassificationCard({groupName, teams,}: GroupClassificationCardProps) {
  return (
    <section className={styles.groupCard}>

        <div className={styles.groupCardHeader}>
            <img src={shield} alt="" className={styles.groupIcon}/>
            <span>{groupName}</span>
        </div>

        <div className={styles.groupTable}>
            <div className={styles.headerRow}>
                <div>#</div>
                <div>Seleção</div>
                <div>J</div>
                <div>V</div>
                <div>E</div>
                <div>D</div>
                <div>GP</div>
                <div>GC</div>
                <div>SG</div>
                <div>PTS</div>
            </div>

            <div className={styles.tableBody}>
                {teams.sort((a, b) => b.points - a.points).map((team) => (
                    <div key={team.id} className={`${styles.row} ${team.qualified ? styles.qualified : ""}`}>
                        <div>{team.position}</div>

                        <div className={styles.teamColumn}>
                            <img src={team.flag} alt={team.name} />

                            <div>
                                <h3>{team.name}</h3>
                                <span>{team.abbreviation}</span>
                            </div>
                        </div>

                        <div>{team.matches}</div>
                        <div>{team.wins}</div>
                        <div>{team.draws}</div>
                        <div>{team.losses}</div>
                        <div>{team.goalsFor}</div>
                        <div>{team.goalsAgainst}</div>

                        <div className={team.goalDifference > 0 ? styles.positive : team.goalDifference < 0 ? styles.negative : ""}>
                            {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                        </div>

                        <div className={styles.points}>{team.points}</div>
                    </div>
                ))}
            </div>
        </div>

        <div className={styles.qualificationLegend}>Classificados para as oitavas</div>
    </section>
  );
}