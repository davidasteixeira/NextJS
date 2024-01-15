import { useState } from "react"
import NumeroDisplay from "../../../components/NumeroDisplay";

const estilo = {
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection:"column",
    backgroundColor: "#222",
    color:"#fff",
    height:"100vh"
}

export default function contador(){

    const [numero, setNumero] = useState(0);

    const inc = () => setNumero(numero+1)
    const dec = () => setNumero(numero-1)
    

    return (
        <div style={estilo}>
            <h1 >Contador</h1>
            <NumeroDisplay numero={numero}/>
            <div>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}