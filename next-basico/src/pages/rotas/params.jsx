import { useRouter } from "next/router"
import Link from "next/link"

export default function prams(){

    const {nome, idade} = useRouter().query;


    console.log(nome, idade)

    return (
        <div>
            <h1>Rotas params nome:{nome} e idade:{idade}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}