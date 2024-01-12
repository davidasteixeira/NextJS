export default function Filho (props) {
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com pai #01</button>
            <button onClick={(e)=> props.funcao('Passei no enem!','Uhullll')}>Falar com pai #01</button>
        </div>
    )
}