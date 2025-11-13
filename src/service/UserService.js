const User = require('../model/User');
const sequelize = require('../config/db');
const brcypt =  require('bcryptjs');

const UserServices = {};

UserServices.createUser = async (userData) => {
    try{
        const hash= await brcypt.hash(userData.password,12)
        const new_user = await User.create({...userData,password:hash});
        return new_user;
    }catch(error){
        console.error('Error creating user:', error);
        throw new Error("No se pudo crear el usuario");
    }
}

UserServices.getUserById = async (userId) => {
    try{
        const user = await User.findByPk(userId);
        return {message:"Usuario encontrado",user};
    }catch(error){
        console.error('Error fetching user by ID:', error);
        throw new Error("No se pudo obtener el usuario");
    }
}

UserServices.getAllUsers = async () => {
    try{
        const users = await User.findAll();
        return {message:"Listado usuarios",users};
    }catch(error){
        console.error('Error fetching all users:', error);
        throw new Error("No se pudieron obtener los usuarios");
    }
}

UserServices.updateUser = async (userId, updateData) => {
    try{
        const data= await User.findByPk(userId);
        if(!data){
            throw new Error ('Usuario no encontrado');
        }
        if(updateData.password) updateData.password = await brcypt.hash(updateData.password,12);
        await data.update(updateData);
        return data;
    }
    catch(error){
        console.error('Error updating user:', error);
        throw new Error("No se pudo actualizar el usuario");
    }
}

UserServices.deleteUser = async (userId) => {
    try{
        const data= await User.findByPk(userId);
        if(!data){
            throw new Error ('Usuario no encontrado');
        }
        const deletedUser = data.get({ plain: true });
        await data.destroy();   
        return {message:'Usuario eliminado correctamente', deletedUser};
    }
    catch(error){   
        console.error('Error deleting user:', error);
        throw new Error("No se pudo eliminar el usuario");
    }
}
module.exports = UserServices;