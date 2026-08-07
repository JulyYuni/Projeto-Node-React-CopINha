import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import logoCopinha from "../../assets/images/header/logoCopinha.svg";
import Logo from "../Logo";
import DashboardIcon from "../../assets/icons/Dashboard.png"
import NoticiasIcon from "../../assets/icons/Noticias.png"
import GruposIcon from "../../assets/icons/Grupos.png"
import TimesIcon from "../../assets/icons/Times.png"
import EstadiosIcon from "../../assets/icons/Estadios.png"
import JogosIcon from "../../assets/icons/Jogos.png"
import ExitIcon from "../../assets/icons/Exit.png"
import { noticias } from "../../assets/Mocks/noticias";
import { Grupos } from "../../assets/Mocks/grupos";
import { Times } from "../../assets/Mocks/times";
import { Estadios } from "../../assets/Mocks/estadios";
import { Jogos } from "../../assets/Mocks/jogos";



export default function Sidebar() {
  return (
    
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.infos}>
          <div className={styles.logo}>
            <img src={logoCopinha}></img>
            <div>
              <Logo className={styles.copinha} />
              <span className={styles.adminPannel}>Painel Admin</span>
            </div>
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}> {/*trocar email*/}
              Rafael Mendes
            </span>
            <span className={styles.userEmail}> {/*trocar email*/}
              admin@copinha.com
            </span>
          </div>
        </div>
        <div className={styles.nav}>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
              <img src={DashboardIcon} alt="Dashboard" />
              <span className={styles.navName}>Dashboard</span>
            </div>
          </NavLink>

          <NavLink
            to="/admin/news"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
              <img src={NoticiasIcon} alt="Noticias"/>
              <span className={styles.navName}>Noticias</span>
            </div>
            <span className={styles.count}>{noticias.length}</span>
          </NavLink>

          <NavLink
            to="/admin/groups"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
              <img src={GruposIcon} alt="Grupos"/>
              <span className={styles.navName}>Grupos</span>
            </div>
            <span className={styles.count}>{Grupos.length}</span>
          </NavLink>

          <NavLink
            to="/admin/teams"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
              <img src={TimesIcon} alt="Times"/>
              <span className={styles.navName}>Times</span>
            </div>
            <span className={styles.count}>{Times.length}</span>
          </NavLink>

          <NavLink
            to="/admin/games"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
                <img src={JogosIcon} alt="jogos"/>
                <span className={styles.navName}>Jogos</span>
            </div>
            <span className={styles.count}>{Jogos.length}</span>
          </NavLink>

          <NavLink
            to="/admin/stadiums"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <div>
              <img src={EstadiosIcon} alt="Estádios"/>
              <span className={styles.navName}>Estádios</span>
            </div>
            <span className={styles.count}>{Estadios.length}</span>
          </NavLink>
        </div>
      </div>
      <Link to="/" className={styles.exitButton}>
          <img src={ExitIcon}/>
          <span>Sair da Conta</span>
      </Link>
    </div>
  );
}
