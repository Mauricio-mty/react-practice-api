const User = require('../service/UserService');

//all
exports.getAll= async(req,res)=>{
    try{
        const users = await User.getAllUsers();
        res.status(200).json(users);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}
//find One
exports.getById= async(req,res)=>{
    try{
        const user= await User.getUserById(req.params.id);
        res.status(200).json(user);
    }catch(e){
        res.status(500).json({message: e.message});
    }   
}
//create
exports.create=async(req,res)=>{
    try{
        const newUser= await User.createUser(req.body);
        res.status(201).json(newUser);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

//update
exports.update= async(req,res)=>{
    try{
        const{id,...rest}= req.body;
        const updatedUser= await User.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    }catch(e){
        res.status(500).json({message: e.message});
    } 
}

exports.changePass= async(req,res)=>{
    try {
        const{id,...rest}= req.body;
        const updatedUser = await User.changePassword(req.params.id, req.body);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({message:e.message});
    }
}

//delete
exports.delete= async(req,res)=>{
    try{
        const deletedUser= await User.deleteUser(req.params.id);
        res.status(204).json();
    }catch(e){
        res.status(500).json({message: e.message});
    }
}