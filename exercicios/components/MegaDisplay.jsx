
export default function megaDisplay(props){

    let dados = () => props.lista.map(item => <span>{item}</span>)

    return (
        {dados}
    )
}