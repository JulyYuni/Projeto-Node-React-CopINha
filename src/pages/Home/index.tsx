import UltimoResultado from "../../components/UltimoResultado";
import styles from "./styles.module.css";
import News from "../../assets/TEST/News.jpg";
import Star from "../../assets/icons/Star.png";
export default function Home() {
  return (
    <>
      <UltimoResultado />
      <div className={styles.title}>
        <span>Últimas Notícias</span>
        <div className={styles.featuredNews}>
          <a className={styles.mainNew}>
            <img src={News} />
          </a>
          <div>
            <span className={styles.NewsTitle}>
              Brasil vence Croácia e abre vantagem no Grupo A
            </span>
            <span className={styles.NewsSubtitle}>
              Em partida eletrizante no Maracanã, a Seleção Brasileira derrotou
              a Croácia por 3×1, com dois gols de Vinicius Jr. e um de Rodrygo.
            </span>
            <div>
              <img src={Star} />
              <span className={styles.NewsDate}>21 de junho de 2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
