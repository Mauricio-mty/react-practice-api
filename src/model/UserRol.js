const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');
const {v4:uuidv4} = require("uuid");

const UserRol = sequelize.define('usuario_rol',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:uuidv4
    },
    tipo:{
        type:DataTypes.STRING,
       
        field: 'tipo'
    },
})

module.exports = UserRol;