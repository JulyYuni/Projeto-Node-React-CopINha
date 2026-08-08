import styles from "./styles.module.css";

import type { Group, MatchPrediction } from "../../../utils/types";

import FinishedGameCard from "../FinishedGameCard";
import PendingGameCard from "../PendingGameCard";
import GroupClassificationCard from "../../Groups/GroupClassificationCard";

import { calculateClassification } from "../../../utils/calculateClassification";

interface GroupSectionProps {
    group: Group;

    predictions: Record<number, MatchPrediction>;

    onPredictionChange: (
        gameId: number,
        prediction: MatchPrediction
    ) => void;
}

export default function GroupSection({
    group,
    predictions,
    onPredictionChange
}: GroupSectionProps) {

    const classification = calculateClassification(
        group.teams,
        group.games,
        predictions
    );

    return (
        <section className={styles.groupSection}>

            <div className={styles.groupSectionGames}>

                {group.games
                    .filter(game => game.status === "finished")
                    .map(game => (
                        <FinishedGameCard
                            key={game.id}
                            game={game}
                        />
                    ))}

                {group.games
                    .filter(game => game.status === "pending")
                    .map(game => (
                        <PendingGameCard
                            key={game.id}
                            game={game}
                            onPredictionChange={onPredictionChange}
                        />
                    ))}

            </div>

            <GroupClassificationCard
                groupName={group.name}
                teams={classification}
            />

        </section>
    );
}