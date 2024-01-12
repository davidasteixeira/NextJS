import { useState } from "react"

export default function mouse() {
    const [x, setX] = useState(0)
    
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        flexDirection:"column",
        backgroundColor: "#222",
        color:"#fff",
        height:"100vh"
    }

    function quandoMover(eve){
        setX(eve.clientX)
        alterarY(eve.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
           <span>Eixo X: {x}</span>
           <span>Eixo Y: {y}</span>
        </div>
    )
}