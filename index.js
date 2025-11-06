const express = require("express");
const sequelize = require("./src/config/db");
require('./src/model/association');


const app = express();
app.use(express.json());

const initDB = async () => {
   try{
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync({force:false});
      console.log('All models were synchronized successfully.');
   }catch(error){   
   console.error('Unable to connect to the database:', error);
 }

}

initDB().then(()=>{
    app.listen(3000, ()=> console.log('Server is running on port 3000')
    )});

module.exports = app;