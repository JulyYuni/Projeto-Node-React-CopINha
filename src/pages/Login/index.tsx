import styles from "./styles.module.css";
import Lock from "../../assets/icons/lock.png";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.iconWrapper}>
          <img src={Lock} alt="cadeado" />
        </div>

        <h1 className={styles.title}>Acesso restrito</h1>
        <p className={styles.subtitle}>Painel administrativo · Cop{"{IN}"}ha</p>

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
