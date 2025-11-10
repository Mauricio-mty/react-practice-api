const Escrito = require('../model/Escritos');
const sequelize = require('../config/db');

const EscritoService = {};

EscritoService.createEscrito = async (escritoData) => {    
    try{
        const new_escrito = await Escrito.create(escritoData);
        return new_escrito;
    }catch(error){
        console.error('Error creating escrito:', error);
        throw new Error("No se pudo crear el escrito");
    }
}  


EscritoService.getEscritoById = async (escritoId) => {
    try{
        const escrito = await Escrito.findByPk(escritoId);  
        return {message:"Escrito encontrado",escrito};
    }catch(error){
        console.error('Error fetching escrito by ID:', error);
        throw new Error("No se pudo obtener el escrito");
    }   
}

EscritoService.getAllEscritos = async () => {
    try{
        const escritos = await Escrito.findAll();       
        return {message:"Listado escritos",escritos};
    }
    catch(error){
        console.error('Error fetching all escritos:', error);
        throw new Error("No se pudieron obtener los escritos");
    }   
}

EscritoService.updateEscrito = async (escritoId, updateData) => {
    try{
        const data= await Escrito.findByPk(escritoId);
        if(!data){
            throw new Error ('Escrito no encontrado');
        }   
        await data.update(updateData);
        return data;
    }     
    catch(error){
        console.error('Error updating escrito:', error);
        throw new Error("No se pudo actualizar el escrito");
    }      
}

EscritoService.deleteEscrito = async (escritoId) => {
    try{
        const data= await Escrito.findByPk(escritoId);
        if(!data){
            throw new Error ('Escrito no encontrado');
        }
        const deletedEscrito = data.get({ plain: true });   
        await data.destroy();   
        return {message:'Escrito eliminado correctamente', deletedEscrito};
    }
    catch(error){   
        console.error('Error deleting escrito:', error);
        throw new Error("No se pudo eliminar el escrito");
    }
<<<<<<< HEAD
}

module.exports = EscritoService;
=======
}
>>>>>>> 5575f450d5b273f9ba6beab2f1c67a5c9dd48cac
