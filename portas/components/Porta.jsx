import style from "../src/styles/Porta.module.css";

export default function Porta() {
  return (
    <div className={style.area}>
      <div className={style.estrutura}>
        <div className={style.porta}>
          <div className={style.numero}>3</div>
          <div className={style.macaneta}></div>
        </div>
      </div>
      <div className={style.chao}></div>
    </div>
  );
}
