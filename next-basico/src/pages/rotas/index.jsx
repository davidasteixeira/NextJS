import Link from "next/link"
import router from "next/router"

export default function rotas(){

    function navegacaoSimples(url){
        router.push(url);
    }

    function navegacaoComParams(){
        router.push({
            pathname: "rotas/params",
            query: {
                idade: 123,
                nome: 'Ana Silva'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?idade=12&nome=Ana">
                    <li>Params</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Buscar</button>
                <button onClick={() => router.push("rotas/123/buscar")}>Buscar</button>
                <button onClick={()=> navegacaoSimples("rotas/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}