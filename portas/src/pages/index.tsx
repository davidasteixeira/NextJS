import { useState } from "react";
import Cartao from "../../components/Cartao";
import EntradaNumerica from "../../components/EntradaNumerica";
import styles from "../styles/Formulario.module.css";
import Link from "next/link";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com Presente?"
            value={comPresente}
            onChange={(presente) => setComPresente(presente)}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link
            href={`/jogo/${qtdePortas}/${comPresente}`}
            className={styles.link}
          >
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
