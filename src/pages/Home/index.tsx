import UltimoResultado from "../../components/UltimoResultado";
import styles from "./styles.module.css";
import News from "../../assets/TEST/News.jpg";
import Star from "../../assets/icons/Star.png";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon.png"
import Reading from "../../assets/icons/Reading.png"

export default function Home() {
  return (
    <>
      <UltimoResultado />
      <div className={styles.newsSection}>
        <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Últimas Notícias</span>
            <div className={styles.divider} />
                <img src={ArrowIcon} alt="ver mais" className={styles.arrow} />
            </div>        
        <Link to="/news/1" className={styles.featuredNews}> {/*mudar para id*/}
          <div className={styles.mainNew}>
            <img src={News} alt="Jogo de futebol"/>
            <span className={styles.groupBadge}>Grupo B</span>
            <span className={styles.readTimeBadge}>
                <img src={Reading} alt="olho" />
                1 min
            </span>
          </div>
          <div className={styles.newsDesc}> 
            <span className={styles.newsTitle}>
              Brasil vence Croácia e abre vantagem no Grupo A
            </span>
            <span className={styles.newsSubtitle}>
              Em partida eletrizante no Maracanã, a Seleção Brasileira derrotou
              a Croácia por 3×1, com dois gols de Vinicius Jr. e um de Rodrygo.
            </span>
            <div className={styles.newsInfo}>
                <div>
                    <img src={Star} alt="estrela"/>
                    <span className={styles.newsAuthor}>Camila Souza</span>
                </div>
                <span className={styles.newsDate}>21 de junho de 2026</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
