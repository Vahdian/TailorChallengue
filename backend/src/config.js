const config = {
    server: {
        port: process.env.PORT || 5555,
    },
    db:{
        uri:process.env.DB_URI,
    }
}

module.exports = config