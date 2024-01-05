export default function jsx4() {
  const subtitulo = "Estou no javascript";
  const valor = 9.6;

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>

      <h3>Valor {valor} esta entre os valores informados:</h3>
      <h4>{entre(valor, 1, 10)}</h4>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}
