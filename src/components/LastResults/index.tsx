import "./styles.css";

import brasilFlag from "../../assets/images/lastResults/brasil-flag.svg";
import croaciaFlag from "../../assets/images/lastResults/croacia-flag.svg";

export default function LastResults() {
  return (
    <section className="last-results">
      <div className="last-results-container">
        <div className="last-results-left">
          <p className="breadcrumb">
            ★ COPA DO MUNDO 2026 - FASE DE GRUPOS
          </p>

          <div className="logo">
            <span className="logo-white">COP</span>
            <span className="logo-yellow">&#123;IN&#125;</span>
            <span className="logo-white">HA</span>
          </div>

          <p className="description">
            Notícias, placar e tabela da Copa do Mundo em um só lugar
          </p>
        </div>

        <div className="result-card">
          <p className="card-title">
            ÚLTIMO RESULTADO - GRUPO A
          </p>

          <div className="score-content">
            <div className="team">
              <img src={brasilFlag} alt="Brasil" />
              <span>BRA</span>
            </div>

            <div className="score">
              <h2>3 × 1</h2>
              <p>Maracanã</p>
            </div>

            <div className="team">
              <img src={croaciaFlag} alt="Croácia" />
              <span>CRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}