import styles from "../styles/Jogo.module.css";
import { useState } from "react";
import { criarPortas, atualizarPortas } from "../../functions/portas";
import PortaModel from "../../model/porta";
import Porta from "../../components/Porta";

export default function jogo() {
  const [p1, setP1] = useState(new PortaModel(1));

  const [portas, setPortas] = useState(criarPortas(8, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          value={porta}
          key={porta.numero}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}></div>
    </div>
  );
}
