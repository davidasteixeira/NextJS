import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()

    const codigo = router.query.codigo

    console.log(codigo)

    return (
        <div>
            <h1> Rotas / Id / Buscar</h1>
        </div>
    )
}