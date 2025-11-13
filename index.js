const express = require("express");
const sequelize = require("./src/config/db");
require('./src/model/association');
const configRoutes  = require("./src/config/routes-config");

const app = express();

configRoutes(app);

const initDB = async () => {
   try{
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync({force:false});
      console.log('All models were synchronized successfully.');
   }catch(error){   
   console.error('Unable to connect to the database:', error)
   console.error("The server will still start, but database operations will not work.");
 }

}

initDB().finally(()=>{
    app.listen(3000, ()=> console.log('Server is running on port 3000')
    )});

module.exports = app;