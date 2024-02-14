function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: "Mousepad", preco: 5.98 },
    { id: numeroAleatorio(), nome: "Mouse", preco: 10 },
    { id: numeroAleatorio(), nome: "Fone", preco: 30 },
    { id: numeroAleatorio(), nome: "Teclado", preco: 60 },
    { id: numeroAleatorio(), nome: "Monitor", preco: 1.2 },
  ]);
}
