import "./styles.css";

import logo from "../../assets/images/footer/logo-copinha-2026.svg";
import iconCadeado from "../../assets/images/footer/icon-cadeado.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src={logo}
          alt="Logo CopINha"
          className="footer-logo"
        />

        <nav className="footer-nav">
          <span>Copa do Mundo</span>
          <span>•</span>
          <span>Fase de Grupos</span>

          <div className="admin-area">
            
            <Link to="/login" className="admin-link">
                <img
                    src={iconCadeado}
                    alt=""
                    className="admin-icon"
                />
                <span>Área administrativa</span>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}