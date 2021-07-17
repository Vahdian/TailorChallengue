const express = require("express")
const cors = require("cors")
const routes = require("../routes")


function expressLoader(app){
    app.use(express.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Credentials", true);
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Origin", true);
        next();
      });
      app.use(
        cors({
          origin: ["http://localhost:3000", "http://localhost:3001"],
          credentials: true,
        })
      );
    app.use(routes)
}

module.exports = expressLoader