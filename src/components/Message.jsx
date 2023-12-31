import React, { useState } from 'react'

const Message = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('false')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('false')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('false')
    const [thanksMessage, setThanksMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value))
                break
        }
    }

    const validateLength = (value, minLength=2) => {
        if (value.length < minLength)
            return true
        return false
    }

    const validateEmail = (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setThanksMessage('')
        setErrorMessage('')

 


            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            switch (result.status) {
                case 200: {
                    clearForm()
                    setThanksMessage('Thanks for your message! ')
                    break
                }
            }

        
        
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <section className="leave-message">
            <div className="container">
                <form onSubmit={handleSubmit} noValidate className="message">
                    <h1>Leave us a message for any information.</h1>
                    <div>
                        <label className={`${nameError ? 'error': ''}`}>{` ${nameError ? 'You need to type in a name': ''}`}</label>
                        <input className="form-input" type="text" value={name} onChange={(e) => handleChange(e)} name="name" id="name" title="Name" placeholder="Name*" tabIndex="1" />
                    </div>
                    <div>
                        <label className={`${!emailError ? 'error': ''}`}>{` ${!emailError ? 'You need to type in a valid email': ''}`}</label> 
                        <input className="form-input" type="email" value={email} onChange={(e) => handleChange(e)} name="email" id="email" title="Email" placeholder="Email*" tabIndex="2" />
                    </div>
                    <div>
                        <label className={`${messageError ? 'error': ''}`}>{`${messageError ? 'You need to write a message': ''}`}</label>
                        <textarea className="form-input" value={message} onChange={(e) => handleChange(e)} name="message" id="message" title="Your Message" cols="30" rows="10" placeholder="Your Message*" tabIndex="3"></textarea>
                    </div>
                    <p className='thanksMessage'>{thanksMessage}</p>
                    <p className='errorMessage'>{errorMessage}</p>
                    <div className="d-grid">
                        <button className="btn-yellow" type="submit">Send Message <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Message