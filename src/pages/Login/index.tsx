import styles from "./styles.module.css";
import Lock from "../../assets/icons/lock.png";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <header className={styles.header}>
        <Link to={"/"} className={styles.logo}><Logo/></Link>
      </header>
      <div className={styles.loginCard}>
        <div className={styles.lock}>
          <img src={Lock} alt="cadeado" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Acesso restrito</h1>
          <p className={styles.subtitle}>Painel administrativo · Cop{"{IN}"}ha</p>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">E-MAIL</label>
            <input id="email" type="email" placeholder="admin@copinha.com" />
          </div>

          <div className={styles.field}>
            <label htmlFor="senha">SENHA</label>
            <input id="senha" type="password" placeholder="**********" />
          </div>

          <button type="submit" className={styles.submitButton}>
            {/* <img src={Lock} alt="cadeado" /> */}
            Entrar no painel
          </button>
        </form>

        <p className={styles.footerText}>
          Acesso exclusivo para administradores
        </p>
      </div>
    </div>
  );
}
