import style from "../src/styles/Porta.module.css";
import PortaModel from "../model/porta";

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada = porta.selecionada ? style.selecionada : "";

  const alternarSelececao = (e) => props.onChange(porta.alternarSelecao());

  return (
    <div className={style.area} onClick={alternarSelececao}>
      <div className={`${style.estrutura} ${selecionada}`}>
        <div className={style.porta}>
          <div className={style.numero}>{porta.numero}</div>
          <div className={style.macaneta}></div>
        </div>
      </div>
      <div className={style.chao}></div>
    </div>
  );
}
