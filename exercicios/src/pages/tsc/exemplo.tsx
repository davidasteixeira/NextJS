import Pessoa from "../../../components/pessoa";

export default function exemplo (){
    return (
        <div>
            <Pessoa nome="João" idade={14}/>
            <Pessoa nome="Douglas"/>
        </div>
    )
}