import { useMatches } from "react-router-dom";
import styles from "./styles.module.css"

export default function AdminHeader(){
    const matches = useMatches();
    const current = matches[matches.length - 1];
    const title = (current.handle as { title?: string })?.title;    
    return(
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    )
}