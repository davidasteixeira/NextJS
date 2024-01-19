export default (req,res) => {
    if(req.method === "GET"){
        res.status(200).json({
            metodo: "Maria"
        });
    }else {
        res.status(200).json({
            metodo: "Rosana"
        });
    }
}