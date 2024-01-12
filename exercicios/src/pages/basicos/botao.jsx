function acao1() {
    console.log("Acao1")
}

function acao5(e) {
    console.log(e)
}
export default function botao(){
    function acao2(){
        console.log("Acao2")
    }
    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function (){
                console.log("Acao3")
            }}>Click #03</button>
            <button onClick={()=> console.log("acao4")}>
                Click #04
            </button>
            <button onClick={e => acao5(e.altKey)}>Click #05</button>
            <input type="text" onChange={e => console.log(e.target.value)}/>
        </div>
    )
}