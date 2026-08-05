import Logo from "../Logo";
import styles from "./styles.module.css";
import BR from "../../assets/TEST/BR.png"

export default function UltimoResultado() {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultLeftSide}>
        <span>★ COPA DO MUNDO 2026 - FASE DE GRUPOS</span>
        <Logo className={styles.logoHero} />
        <span className={styles.desc}>Notícias, placar e tabela da Copa do Mundo em um só lugar</span>
      </div>

      <div className={styles.resultRightSide}>
        <p className={styles.lastResult}>ÚLTIMO RESULTADO · GRUPO A</p>

        <div className={styles.lastScore}>
          <div className={styles.team}>
            <img src={BR} className={styles.flag}></img> {/*FALTA INCLUIR BANDEIRA*/}
            <span className={styles.name}>BRA</span>
          </div>

          <div className={styles.mainScore}>
            <span className={styles.score}>3 × 1</span>
            <span className={styles.stadium}>Maracanã</span>
          </div>

          <div className={styles.team}>
            <img src={BR} className={styles.flag}></img> {/*FALTA INCLUIR BANDEIRA*/}
            <span className={styles.name}>CRO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
