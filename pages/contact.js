import React from "react"
import Address from "../components/address"
import Email from "../components/email"

class Contact extends React.Component {
    render(){
        return(
            <div>
                <h1>Contact Us:</h1>

                <h3>Email</h3>
                <Email />

                <h3>Address</h3>
                <Address />

                <h3>WhatsApp</h3>

            </div>
        )
    }
}

export default Contact