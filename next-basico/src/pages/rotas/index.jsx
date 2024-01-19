import Link from "next/link"

export default function rotas(){
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?idade=12&nome=Ana">
                    <li>Params</li>
                </Link>
            </ul>
        </div>
    )
}