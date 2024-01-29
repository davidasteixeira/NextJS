import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));

  const [portas, setPortas] = useState(criarPortas(3, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          value={porta}
          key={porta.numero}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return <div style={{ display: "flex" }}>{renderizarPortas()}</div>;
}
