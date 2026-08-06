
import UltimoResultado from "../../components/UltimoResultado";
import SimulatorHeader from "../../components/Simulator/SimulatorHeader";

import { useState } from "react";

import styles from "./styles.module.css";
import GroupSection from "../../components/Simulator/GroupSection";

import { groups, finishedGames } from "../../assets/Mocks/timesJogos.ts";
import type { MatchPrediction } from "../../utils/types.ts";

export default function Simulator() {

    const [predictions, setPredictions] =
        useState<Record<number, MatchPrediction>>({});

    function handlePredictionChange(
        gameId: number,
        prediction: MatchPrediction
    ) {

        setPredictions(previous => ({

            ...previous,

            [gameId]: prediction

        }));

    }

    return (
        <>
            <UltimoResultado/>
            <SimulatorHeader/>

            <main className={styles.simulator}>
                {groups.map(group => (

                    <GroupSection
                        key={group.id}
                        group={group}
                        predictions={predictions}
                        onPredictionChange={handlePredictionChange}
                    />

                ))}

            </main>
        </>
    );
}