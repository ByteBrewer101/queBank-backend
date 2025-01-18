const { Schema, default: mongoose } = require("mongoose");

const questionSchema = new Schema({
    title:String,
    desc:String,
    answer:String
})


const queModel = mongoose.model('queModel',questionSchema)

module.exports = queModel