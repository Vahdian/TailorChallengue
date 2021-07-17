const mongoose = require("mongoose");

const restaurantsSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    photograph: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latlng: {
        lat:{
            type:Number,
            required:true
        },
        lng:{
            type:Number,
            required:true
        }
    },
    image: {
        type: String,
        required: true
    },
    cuisine_type: {
        type: String,
        required: true
    },
    operating_hours: {
        Monday:{
            type: String,
            required: true
        },
        Tuesday:{
            type: String,
            required: true
        },
        Wednesday:{
            type: String,
            required: true
        },
        Thursday:{
            type: String,
            required: true
        },
        Friday:{
            type: String,
            required: true
        },
        Saturday:{
            type: String,
            required: true
        },
        Sunday:{
            type: String,
            required: true
        },
    },
    reviews:[{
        name:{
            type:String,
            required: false
        },
        date:{
            type:String,
            required: false
        },
        rating:{
            type:Number,
            required: false
        },
        comments:{
            type:String,
            required: false
        },
    }]
})
    

module.exports = mongoose.model("restaurants", restaurantsSchema, "restaurants")