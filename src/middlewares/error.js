const errorHanlder =(err,req,res,next)=>{
    // if(err.name ==="Token error"){
    //     err.statusCode =400;
    //     err.message="Token error"
    // }
    res
       .status(err.statusCode||500)
       .json({message:err.message||"Intennal Server"})
}

module.exports = errorHanlder;