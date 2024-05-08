import Botao from "../../components/Botao";
import Estatitica from "../../components/Estatitica";
import styles from "../../src/styles/Resultado.module.css";
import { useRouter } from "next/router";

export default function resultado() {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado final</h1>
      <div style={{ display: "flex" }}>
        <Estatitica texto="Perguntas" valor={total} />
        <Estatitica texto="Certas" valor={certas} corFundo="#9CD2A4" />
        <Estatitica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tente novamente" />
    </div>
  );
}
