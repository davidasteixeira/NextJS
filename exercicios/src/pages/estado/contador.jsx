import { useState } from "react"
import ContadorDisplay from "../../../components/ContadorDisplay";

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
            <ContadorDisplay numero={numero}/>
            <div>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}