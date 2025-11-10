const Escrito =require('../service/EscritoService');


//all
exports.getAll= async(req,res)=>{
    try{
        const escritos = await Escrito.getAllEscritos();    
        res.status(200).json(escritos);
    }catch(e){
        res.status(500).json({message: e.message});
    }   
}


//find One
exports.getById= async(req,res)=>{
    try{
        const escrito= await Escrito.getEscritoById(req.params.id);
        res.status(200).json(escrito);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

//create
exports.create=async(req,res)=>{
    try{
        const newEscrito= await Escrito.createEscrito(req.body);
        res.status(201).json(newEscrito);
    }catch(e){
        res.status(500).json({message: e.message});
    }   
}

//update
exports.update= async(req,res)=>{
    try{
        const{id,...rest}= req.body;    
        const updatedEscrito= await Escrito.updateEscrito(req.params.id, req.body);
        res.status(200).json(updatedEscrito);
    }catch(e){
        res.status(500).json({message: e.message});
    }   
}

//delete
exports.delete= async(req,res)=>{
    try{
        const deletedEscrito= await Escrito.deleteEscrito(req.params.id);           
        res.status(204).json();
    }catch(e){
        res.status(500).json({message: e.message});
    }
}