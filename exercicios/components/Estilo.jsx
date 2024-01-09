export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numer >= 0 ? "#2D2" : "#D22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
          padding: props.espacamento ? props.espacamento : ".5rem",
          margin: props.margin ? props.margin : ".5rem",
        }}
      >
        Texto #01
      </h1>
      <h2 className={props.numero >= 0 ? "azul" : "vermelho"}>Texto #02</h2>
    </div>
  );
}
