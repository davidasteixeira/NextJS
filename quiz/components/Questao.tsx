import QuestaoModel from "../model/questao";
import styles from "../src/styles/Questao.module.css";

interface QuestaoProps {
  valor: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  return (
    <div className={styles.questao}>
      <h1>Questao</h1>
    </div>
  );
}
