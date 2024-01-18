import { useRouter } from "next/router"

export default function prams(){

    const {nome, idade} = useRouter().query;


    console.log(nome, idade)

    return (
        <div>
            <h1>Rotas params nome:{nome} e idade:{idade}</h1>
        </div>
    )
}