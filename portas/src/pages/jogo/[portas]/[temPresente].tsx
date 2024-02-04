import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import { criarPortas, atualizarPortas } from "../../../../functions/portas";
import PortaModel from "../../../../model/porta";
import Porta from "../../../../components/Porta";
import Link from "next/link";
import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter();

  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const { portas, temPresente } = router.query;
    setPortas(criarPortas(+portas, +temPresente));
  }, [router?.query]);

  useEffect(() => {
    const { portas, temPresente } = router.query;

    const qtdePortasValidas = +portas >= 3 && +portas <= 100;
    const temPresenteValido = +temPresente >= 1 && +temPresente <= +portas;

    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas]);

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
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
