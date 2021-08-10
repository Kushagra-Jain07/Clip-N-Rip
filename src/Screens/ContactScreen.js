import React from "react"
import MdLocate from "react-ionicons/lib/MdLocate"
import MdMail from "react-ionicons/lib/MdMail"
import IosPhonePortrait from "react-ionicons/lib/IosPhonePortrait"

function ContactScreen() {
    return(
        <div className="contact-container">
            <div className="contact-phone">
                <ul>
                    <li className="contact-icon">
                        <IosPhonePortrait fontSize="50px" />
                    </li>
                    <li className="contact-details">
                        Talk to Us
                    </li>
                    <li className="contact-place">
                        +44 4027777 <br/>
                        Open: Mon-Sat (10am - 8pm)
                    </li>
                </ul>
            </div>
            <div className="contact-email">
                <ul>
                    <li className="contact-icon">
                        <MdMail fontSize="50px" />
                    </li>
                    <li className="contact-details">
                        Email us for queries
                    </li>
                    <li className="contact-place">
                        clipN'rip@gmail.com <br/>
                    </li>
                </ul>
            </div>
            <div className="contact-address">
                <ul>
                    <li className="contact-icon">
                        <MdLocate fontSize="50px"  />
                    </li>
                    <li className="contact-details">
                        Find us here
                    </li>
                    <li className="contact-place">
                        10 Street <br />
                        Convent Garden, UK
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactScreen