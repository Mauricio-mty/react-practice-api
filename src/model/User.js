const sequelize = require('sequelize');
const { DataTypes} = sequelize;
const {v4:uuidv4, validate} = require('uuid');


const User = sequelize.define('User'.{
    id: {
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:()=> uuidv4
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

    }
    
});

module.exports = User;