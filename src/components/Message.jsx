import React from 'react'

const Message = () => {
  return (
    <section className="leave-message">
        <div className="container">
            <div className="message">
                <h1>Leave us a message for any information.</h1>
                <div>
                    <input className="form-input" type="text" name="name" id="name" title="Name" placeholder="Name*" tabindex="1" />
                </div>
                <div>
                    <input className="form-input" type="email" name="email" id="email" title="Email" placeholder="Email*" tabindex="2" />
                </div>
                <div>
                    <textarea className="form-input" name="your-message" id="your-message" title="Your Message" cols="30" rows="10" placeholder="Your Message*" tabindex="3"></textarea>
                </div>
                <div className="d-grid">
                    <button className="btn-yellow" type="submit">Send Message <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Message