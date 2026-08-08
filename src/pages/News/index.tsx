import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Star from "../../assets/icons/Star.png";
import Relogio from "../../assets/icons/relogio.png";
import { noticias } from "../../assets/Mocks/noticias";
import NewsCard from "../../components/NewsCard";
import { useState } from "react";



export default function News() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === id);
  const outrasNoticias = noticias.filter((n) => n.id !== id);
  const [indiceAtual, setIndiceAtual] = useState(0);

  function proximo() {
  setIndiceAtual((atual) =>
    atual < outrasNoticias.length - 1 ? atual + 1 : atual,
    );
  }

  function anterior() {
    setIndiceAtual((atual) => (atual > 0 ? atual - 1 : atual));
  }

  if (!noticia) return <p>Notícia não encontrada</p>;

  return (
    <div className={styles.newsPage}>
      <div className={styles.topInfo}>
        <span className={styles.groupBadge}>Grupo {noticia.grupo}</span>
        <span className={styles.readTime}>
          <img src={Relogio} alt="" />
          {noticia.tempoDeLeitura} de leitura
        </span>
      </div>

      <h1 className={styles.title}>{noticia.titulo}</h1>

      <p className={styles.subtitle}>{noticia.subTitulo}</p>

      <div className={styles.authorInfo}>
        <img src={Star} alt="estrela" />
        <div>
          <span className={styles.author}>{noticia.autor}</span>
          <span className={styles.date}>{noticia.data}</span>
        </div>
      </div>

      <img
        src={noticia.imagemCapa}
        alt={noticia.titulo}
        className={styles.mainImage}
      />

      <div className={styles.body}>
        {noticia.corpoDaNoticia.split("\n").map((paragrafo, index) => (
          <p key={index} className={styles.paragrafo}>
            {paragrafo}
          </p>
        ))}
      </div>
      <div className={styles.moreNews}>
        <div>
          <h2 className={styles.moreNewsTitle}>MAIS NOTÍCIAS</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.carouselWrapper}>
          <button onClick={anterior} disabled={indiceAtual === 0}>
            ‹
          </button>

          <div className={styles.carouselTrack}>
            <div
              className={styles.carouselInner}
              style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
            >
              {outrasNoticias.map((n) => (
                <div key={n.id} className={styles.carouselItem}>
                  <NewsCard key={n.id} noticia={n} variant="compact" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={proximo}
            disabled={indiceAtual === outrasNoticias.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
