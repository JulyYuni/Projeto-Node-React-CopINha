import styles from "./styles.module.css";
console.log(styles);


export type GameFilter = "all" | "finished" | "upcoming";

interface GameNavigationBarProps {
    currentFilter: GameFilter;
    onChangeFilter: (filter: GameFilter) => void;
}

export default function GameNavigationBar({
    currentFilter,
    onChangeFilter,
}: GameNavigationBarProps) {
    return (
        <div className={styles.gameNavigationBar}>
            <button
                className={`${styles.gameNavigationBarButton} ${currentFilter === "all" ? styles.active : ""}`}
                onClick={() => onChangeFilter("all")}
            >
                Todos
            </button>

            <button
                className={`${styles.gameNavigationBarButton} ${currentFilter === "finished" ? styles.active : ""}`}
                onClick={() => onChangeFilter("finished")}
            >
                Encerrados
            </button>

            <button
                className={`${styles.gameNavigationBarButton} ${currentFilter === "upcoming" ? styles.active : ""}`}
                onClick={() => onChangeFilter("upcoming")}
            >
                Próximos
            </button>
        </div>
    );
}