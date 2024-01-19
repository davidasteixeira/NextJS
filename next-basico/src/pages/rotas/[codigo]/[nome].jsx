import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()

    const {codigo,nome} = router.query;

    console.log(codigo, nome)

    return (
        <div>
            <h1> Rotas / {codigo ? codigo : 'codigo'}  / {nome ? nome : 'Buscar'}</h1>
        </div>
    )
}