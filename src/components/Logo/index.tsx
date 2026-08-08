import styles from "./styles.module.css"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      COP<span className={styles.logoHighlight}>{"{IN}"}</span>HA
    </span>
  );
}