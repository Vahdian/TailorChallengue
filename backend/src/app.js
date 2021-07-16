const express = require("express")

function serverBootstrpaing(){
    const app = express();
    const server =  app.listen(5000)

    server.on("listening", function(){
        console.info(
            `The server for TailorChallenge is running on port 5000`
        );
    } )
}

serverBootstrpaing()