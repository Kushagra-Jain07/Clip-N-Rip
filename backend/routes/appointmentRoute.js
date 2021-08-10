const express= require("express")
const Appointment = require("../models/appointmentModel")

const router = express.Router()

router.post('/appointment', async(req,res)=>{
    
    const appointment = new Appointment({
        name: req.body.name,
        contactNo: req.body.contactNo,
        service: req.body.service,
        price: req.body.price,
        aptDate: req.body.aptDate
    })
    const newAppointment = await appointment.save()
    
    if(newAppointment){
        res.send({
            success: true,
            id: newAppointment._id        
        })
    }else{
        res.status(401).send({msg: "Invalid User Data"})
    }
})

module.exports = router