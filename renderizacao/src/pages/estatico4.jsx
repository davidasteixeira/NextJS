export async function getStaticProps() {
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
        {produto.id} - {produto.title} tem o preço de R${produto.userId}
      </li>
    );
  });
}

export default function Estatico4(props) {
  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizar(props)}</ul>
    </div>
  );
}
