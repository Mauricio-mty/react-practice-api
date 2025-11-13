const UserRolService = require("../service/UserRolService");

//list all
exports.getAll = async (req,res)=>{
    try {
        const rol = await UserRolService.getAllRoles();
        res.status(200).json(rol);
    }catch(e){
        res.status(500).joson({message:e.message});
    }

} 

//create
exports.create=async(req,res)=>{
    try {
        const newRol = await  UserRolService.createRole(req.body);
        res.status(201).json(newRol);
    } catch (e) {
        res.status(500).json({message:e.message});
    }
}