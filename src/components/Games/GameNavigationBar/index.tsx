import styles from "./styles.module.css";
console.log(styles);

export type GameFilter = "all" | "finished" | "pending";

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
                className={`${styles.gameNavigationBarButton} ${currentFilter === "pending" ? styles.active : ""}`}
                onClick={() => onChangeFilter("pending")}
            >
                Próximos
            </button>
        </div>
    );
}