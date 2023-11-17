import React from 'react'
import Pin from '@images/icon-pin.svg'
import Phone from '@images/icon-call.svg'
import Mail from '@images/icon-mail.svg'

const ContactInfo = () => {
  return (
    <section className="contact-info">
        <div className="container">
            <div className="contact">
                <div className="icon-info">
                    <div className="icon-box">
                        <div>
                            <img src={Pin} alt="Icon of a map pin" />
                        </div>
                        <div className="text">
                            <h3>Visit us</h3>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                </div>
                <div className="icon-info">
                    <div className="icon-box">
                        <div>
                            <img src={Phone} alt="Icon of a phone" />
                        </div>
                        <div className="text">
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                </div>
                <div className="icon-info">
                    <div className="icon-box">
                        <div>
                            <img src={Mail} alt="Icon of a letter" />
                        </div>
                        <div className="text">
                            <h3>Email us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo