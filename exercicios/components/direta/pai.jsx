import Filho from "./filho";

export default function Pai(props){
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia}/>
            <Filho nome="Joana" familia={props.familia}/>
            <Filho {...props} />
        </div>
    )
}