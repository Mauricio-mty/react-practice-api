const express = require("express");

const User = require("../routes/UserRoutes");
const Escrito = require("../routes/EscritoRoutes");

const configRoutes = (app) => {
    app.use(express.json());

    app.use("/user",User);
    app.use("/escrito",Escrito);
};

module.exports=configRoutes;