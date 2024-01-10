import Subdivisao from "./Subdivisao";
import styles from "../src/styles/linha.module.css";

export default function Linha(props) {
  return (
    <div
      className={styles.linha}
      style={{
        flexDirection: props.reverse ? "row-reverse" : "row",
      }}
    >
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
    </div>
  );
}
