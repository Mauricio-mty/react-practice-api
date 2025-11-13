const sequelize = require('../config/db');
const { DataTypes} = require('sequelize');
const {v4:uuidv4} = require("uuid");
const rol = require('./UserRol');


const User = sequelize.define('usuario',{
    id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:uuidv4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    mail:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,    

    },userRolId:{
        type:DataTypes.UUID,
        references:{
            model:rol,
            key:'id',
        },
    },

});

module.exports = User;