import styles from "./styles.module.css";
import trashIcon from "../../../assets/icons/trash.png";
import { Grupos as gruposMock } from "../../../assets/Mocks/grupos";
import { useState } from "react";

function formatarData(isoString: string) {
  //essa função vai mudar a data do formato que colocaram na API pra um formato legível em extenso
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(isoString));
}

export default function Admingroups() {
  const [grupos, setGrupos] = useState(gruposMock);
  function excluirGrupo(id: string) {
    setGrupos((atual) => atual.filter((g) => g.id !== id));
  }
  return (
    <div className={styles.groups}>
      <button className={styles.btn}> + Novo Grupo </button>
      <div className={styles.sheet}>
        <div className={styles.sheetHeader}>
          <span>GRUPO</span>
          <span>CRIADO EM</span>
        </div>
        <div className={styles.sheetGroups}>
          {grupos.map((grupo) => (
            <tr key={grupo.id} className={styles.sheetRow}>
              <td className={styles.groupName}>{grupo.nome}</td>
              <td className={styles.groupData}>{formatarData(grupo.createdAt)}</td>
              <td>
                <button onClick={() => excluirGrupo(grupo.id)}>
                  <img src={trashIcon} alt="excluir" className={styles.trashIcon}/>
                </button>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}
