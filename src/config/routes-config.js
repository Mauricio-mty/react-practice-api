const express = require("express");

const User = require("../routes/UserRoutes");


const configRoutes = (app) => {
    app.use(express.json());

    app.use("/user",User);
};

module.exports=configRoutes;