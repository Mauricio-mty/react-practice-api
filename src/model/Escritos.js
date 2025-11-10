const sequelize = require('../config/db');
const { DataTypes} = require('sequelize');;
const {v4:uuidv4, validate} = require('uuid');
const User = require('./User');

const Escrito = sequelize.define('escrito',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:uuidv4
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    userId:{
        type:DataTypes.UUID,
        references:{
            model:User,
            key:'id',
        },
    },  
});


module.exports = Escrito;