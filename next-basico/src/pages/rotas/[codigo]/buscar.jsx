import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()

    const {codigo} = router.query

    return (
        <div>
            <h1> Rotas / {codigo ?? codigo}  / Buscar</h1>
        </div>
    )
}