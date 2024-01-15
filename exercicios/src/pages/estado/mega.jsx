import { useState } from "react";
import NumeroDisplay from "../../../components/numeroDisplay";
const estilo = {
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection:"column",
    backgroundColor: "#222",
    color:"#fff",
    height:"100vh"
}

export default function MegaVirada(){

    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState(mega(qtde));

    function renderizarNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}/>
        )
    }

    return (
        <div style={estilo}>
            <h1>Mega da Virada</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}>
                {renderizarNumeros()}
            </div>
            <input type="number" min={6} max={20} value={qtde} 
                onChange={ev => setQtde(ev.target.value)}
            />
            <button onClick={()=> setNumeros(mega(qtde))}>
                Gerar Aposta
            </button>
        </div>
    )
}


function mega(quantidade=6,numeros=[]){
    quantidade = +quantidade

    if(quantidade < 6 && quantidade > 60){
        throw "Quantidade inválida"
    }

   if(numeros.length === quantidade){
     return numeros.sort((n1,n2)=> n1-n2)
   }

   const numeroAleatorio = parseInt(Math.random()*60 ) + 1

   if(!numeros.includes(numeroAleatorio)){
    return mega(quantidade, [...numeros, numeroAleatorio])
   }else {
    return mega(quantidade,numeros)
   }
}