const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const appointmentRoute = require("./routes/appointmentRoute")
const cors = require("cors")

const URL = "mongodb://localhost/barber"

mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).catch(error => console.log(error.reason))

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(appointmentRoute)

app.listen(5500, () => { console.log("Server Started") })

