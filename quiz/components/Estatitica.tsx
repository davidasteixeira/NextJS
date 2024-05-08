import styles from "../src/styles/Estatistica.module.css";

interface estatiticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

export default function Estatitica(props: estatiticaProps) {
  return (
    <div className={styles.estatitica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: props.corFundo ?? "#FDD60F",
          color: props.corFonte ?? "#333",
        }}
      >
        {props.valor}
      </div>
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
}
