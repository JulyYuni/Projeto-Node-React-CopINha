import "./styles.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo-copinha.svg";
import iconNoticias from "../../assets/images/header/icon-noticias.svg";
import iconGrupos from "../../assets/images/header/icon-grupos.svg";
import iconJogos from "../../assets/images/header/icon-jogos.svg";
import iconSimulador from "../../assets/images/header/icon-simulador.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo CopINha" />
      </div>

      <nav className="menu">
        <Link to="/" className="menu-item menu-item-ativo">
          <img src={iconNoticias} alt="" className="noticias-icone" />
          <span>Notícias</span>
        </Link>

        <Link to="/groups" className="menu-item">
          <img src={iconGrupos} alt="" className="grupos-icone" />
          <span>Grupos</span>
        </Link>

        <Link to="/games" className="menu-item">
          <img src={iconJogos} alt="" className="jogos-icone" />
          <span>Jogos</span>
        </Link>

        <Link to="/simulator" className="menu-item">
          <img src={iconSimulador} alt="" className="simulador-icone" />
          <span>Simulador</span>
        </Link>
      </nav>
    </header>
  );
}
