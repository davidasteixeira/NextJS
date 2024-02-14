export async function getServerSideProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
}

function renderizar(props) {
  return props.produtos.map((produto) => {
    return (
      <li key={produto.id}>
        {produto.id} - {produto.nome} tem o preço de R${produto.preco}
      </li>
    );
  });
}

export default function Dinamico2(props) {
  return (
    <div>
      <h1>Dinamico2 #02</h1>
      <ul>{renderizar(props)}</ul>
    </div>
  );
}
