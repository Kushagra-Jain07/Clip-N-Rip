const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true,
        dropDups: true
    },
    service:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    aptDate:{
        type: String,
        required: true
    }
})

const appointmentModel = mongoose.model("Appointments", appointmentSchema)

module.exports = appointmentModel