import UltimoResultado from "../../components/UltimoResultado";
import styles from "./styles.module.css";
import ArrowIcon from "../../assets/icons/ArrowIcon.png"
import NewsCard from "../../components/NewsCard";
import { noticias } from "../../assets/Mocks/noticias";

export default function Home() {
  const [destaque, ...outras] = noticias;
  return (
    <>
      <UltimoResultado />
      <div className={styles.newsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Últimas Notícias</span>
          <div className={styles.divider} />
          <img src={ArrowIcon} alt="ver mais" className={styles.arrow} />
        </div>

        <NewsCard noticia={destaque} />

        <div className={styles.newsList}>
          {outras.map((noticia) => (
            <NewsCard key={noticia.id} noticia={noticia} variant="small" />
          ))}
        </div>
      </div>
    </>
  );
}
