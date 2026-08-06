import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import logoCopinha from "../../assets/images/header/logoCopinha.svg"
export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/noticias"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Notícias
      </NavLink>

      <NavLink
        to="/admin/grupos"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Grupos
      </NavLink>

      <NavLink
        to="/admin/times"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Times
      </NavLink>

      <NavLink
        to="/admin/jogos"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Jogos
      </NavLink>

      <NavLink
        to="/admin/estadios"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Estádios
      </NavLink>

        <div>
          <img src={logoCopinha}></img>
        </div>
      
    </nav>
  );
}
