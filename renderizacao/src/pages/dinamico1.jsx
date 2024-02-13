export function getServerSideProps() {
  console.log("[Server] gerando props para component lado do servidor");
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Dinamico1(props) {
  return (
    <div>
      <h1>Dimamico #01</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
