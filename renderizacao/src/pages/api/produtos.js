export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nome: "Mousepad", preco: 5.98 },
    { id: 2, nome: "Mouse", preco: 10 },
    { id: 3, nome: "Fone", preco: 30 },
    { id: 4, nome: "Teclado", preco: 60 },
    { id: 5, nome: "Monitor", preco: 1.2 },
  ]);
}
