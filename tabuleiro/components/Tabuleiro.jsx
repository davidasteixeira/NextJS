import Linha from "./Linha";

export default function Tabuleiro() {
  return (
    <div>
      <Linha />
      <Linha reverse />
      <Linha />
      <Linha reverse />
      <Linha />
      <Linha reverse />
      <Linha />
      <Linha reverse />
    </div>
  );
}
