import styles from "./styles.module.css";
import Star from "../../assets/icons/Star.png";
import { Link } from "react-router-dom";
import Reading from "../../assets/icons/Reading.png";
import type { Noticia } from "../../assets/Mocks/noticias";

type NewsCardProps = {
  noticia: Noticia;
  variant?: "small" | "default";
};

export default function NewsCard({
  noticia,
  variant = "default",
}: NewsCardProps) {
  return (
    <Link
      to={`/news/${noticia.id}`}
      className={`${styles.featuredNews} ${variant === "small" ? styles.small : ""}`}
    >
      <div className={styles.mainNew}>
        <img src={noticia.imagemCapa} alt={noticia.titulo} />
        <span className={styles.groupBadge}>Grupo {noticia.grupo}</span>
        <span className={styles.readTimeBadge}>
          <img src={Reading} alt="olho" />
          {noticia.tempoDeLeitura}
        </span>
      </div>
      <div className={styles.newsDesc}>
        <span className={styles.newsTitle}>{noticia.titulo}</span>
        <span className={styles.newsSubtitle}>{noticia.subTitulo}</span>
        <div className={styles.newsInfo}>
          <div>
            <img src={Star} alt="estrela" />
            <span className={styles.newsAuthor}>{noticia.autor}</span>
          </div>
          <span className={styles.newsDate}>{noticia.data}</span>
        </div>
      </div>
    </Link>
  );
}
