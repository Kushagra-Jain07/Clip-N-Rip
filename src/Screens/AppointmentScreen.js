import React, { useState } from "react"
import { datas } from "../Components/services"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"
import PaypalButton from "../Components/PaypalButton"

function AppointmentScreen() {

    const [name, setName] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [service, setService] = useState(datas[0].name)
    const [aptDate, setAptDate] = useState(new Date())

    const data = datas.find(x => x.name === service)
    const price = data.price

    const [id, setID] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        const appointment = {
            name, contactNo, service, price, aptDate
        }

        axios.post("http://localhost:5500/appointment", appointment)
            .then(res => {
                setID(res.data.id)
                setShowPaypal(res.data.success)
            })

    }

    const [showPaypal, setShowPaypal] = useState(false)

    return (
        <div className="appointment-screen">
            {showPaypal ?
                <PaypalButton id={id.slice(0, 10)} service={service} amount={price} />
                :
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li>
                                <h2>Pick an Appointment</h2>
                            </li>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Enter Your Name" id="name" onChange={(e) => setName(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="email">Contact No</label>
                                <input type="text" name="contactNo" placeholder="Enter Contact No." id="contactNo" onChange={(e) => setContactNo(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="service">Service</label>
                                <select value={datas.name} onChange={(e) => { setService(e.target.value) }}>
                                    {datas.map(data =>
                                        <option key={data.id} value={data.name}>{data.name}</option>
                                    )}
                                </select>
                            </li>
                            <li>
                                <label htmlFor="price">Price</label>
                                <input type="text" name="price" id="price" value={"£ " + price} readOnly={true} />
                            </li>
                            <li>
                                <label htmlFor="aptDate">Appointment Date</label>
                                <DatePicker
                                    selected={aptDate}
                                    onChange={(aptDate) => setAptDate(aptDate)}
                                />
                            </li>
                            <li>
                                <button type="submit">Book</button>
                            </li>
                        </ul>
                    </form>
                </div>}
        </div>

    )
}

export default AppointmentScreen