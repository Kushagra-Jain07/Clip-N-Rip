import React from "react"
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom"
import AboutScreen from "./Screens/AboutScreen"
import HomeScreen from "./Screens/HomeScreen"
import ContactScreen from "./Screens/ContactScreen"
import ServicesScreen from "./Screens/ServicesScreen"
import AppointmentScreen from "./Screens/AppointmentScreen"

function App() {

    return(
        <Router>
                <div className="grid-container">
                    <header className="header">
                        <div className="header-name">
                            <img className="header-img" src="/images/logo.jpg" alt="cut"></img>
                            <Link to="/"><i>ClipN'Rip</i></Link>
                        </div>
                        <div className="header-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/appointment">Pick an Appointment</Link>
                        </div>
                    </header>
                    <main className="main">
                        <Switch>
                            <Route path="/" exact component={HomeScreen} />
                            <Route path="/about" component={AboutScreen} />
                            <Route path="/contact" component={ContactScreen} />
                            <Route path="/services" component={ServicesScreen} />
                            <Route path="/appointment" component={AppointmentScreen} />
                        </Switch>
                    </main>
                    <footer className="footer">
                        <h3>All Rights Reserved</h3>
                    </footer>
                </div>
        </Router>
    )
}

export default App