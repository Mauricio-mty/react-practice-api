const express = require("express");

const User = require("../routes/UserRoutes");
const Escrito = require("../routes/EscritoRoutes");
const  Login  = require("../routes/Login");
const UserRol = require("../routes/UserRolRoutes");

const configRoutes = (app) => {
    app.use(express.json());
    
    app.use("/login",Login);
    app.use("/user",User);
    app.use("/escrito",Escrito);
    app.use("/rol",UserRol);
    
};

module.exports=configRoutes;