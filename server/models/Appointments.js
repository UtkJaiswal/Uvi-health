const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    appointmentName:{
        type:String,
        required:true
    },
    personName:{
        type:String,
        required:true
    },
    appointmentType:{
        type:String,
        required:true
    },
    appointmentSlot:{
        type:String,
        required:true
    },
    isCompleted:{
        default:false
    }
})

const AppointmentModel = mongoose.model("appointments",AppointmentSchema)

module.exports = AppointmentModel