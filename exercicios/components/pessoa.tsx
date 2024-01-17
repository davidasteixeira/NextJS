interface PEssoaProps {
    nome: String
    idade?: number
}

export default function Pessoa(props: PEssoaProps){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'Não informada'}</div>
        </div>
    )

}