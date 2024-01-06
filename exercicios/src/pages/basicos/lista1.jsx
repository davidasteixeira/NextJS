export default function lista() {
  const conteudo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultado = [];

  for (let i in conteudo) {
    let elemento = <span>{conteudo[i]},</span>;
    resultado.push(elemento);
  }

  return resultado;
}
