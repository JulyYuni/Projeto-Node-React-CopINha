import "./styles.css";

import arrowRight from "../../../assets/images/groups/groupClassificationHeader/right-yellow-arrow.svg";

export default function GroupClassificationHeader() {
  return (
    <section className="group-classification-header">
      <div className="group-classification-header-container">
        <h2 className="group-classification-header-title">
          Simulador
        </h2>

        <div className="group-classification-header-line"></div>

        <img
          src={arrowRight}
          alt="Ver classificação"
          className="group-classification-header-icon"
        />
      </div>
    </section>
  );
}