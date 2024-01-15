export default function NumeroDisplay(props){

    const estilo = {
        display:"Flex",
        justifyContent:"center",
        alignItems:"center",
        heigth: "50px",
        width:"50px",
        borderRadius:"25px",
        backgroundColor: "#fff",
        color:"#000",
        fontSize: "2rem",
        margin:"20px"
    }

    return (
        <div style={estilo}>
            {props.numero}
        </div>
    )
}