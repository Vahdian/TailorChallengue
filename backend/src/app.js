const express = require("express");
const config = require("./config");
const loader = require("./loaders/loader");

function serverBootstrpaing(){
    const app = express();
    const server =  app.listen(config.server.port)

    server.on("listening", function(){
        console.info(
            `The server for TailorChallenge is running on port: http://localhost:${config.server.port}`
        );
        loader(app)
    } )
}

serverBootstrpaing()