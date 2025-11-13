const UserRol = require('../model/UserRol');
const sequelize = require('../config/db');

const UserRolService = {};

UserRolService.createRole = async (data) => {
    try {
        const newRole = await UserRol.create(data);
        return newRole;
    }catch (error) {
        console.error('Error creating role:', error);
        throw new Error("No se pudo crear el rol");
    }
};

UserRolService.getAllRoles = async () => {      
    try {   
        const roles = await UserRol.findAll();
        return { message: "Listado de roles", roles };
    }   
    catch (error) { 
        console.error('Error fetching all roles:', error);
        throw new Error("No se pudieron obtener los roles");
    }   
};

module.exports = UserRolService;