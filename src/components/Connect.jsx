import React from 'react'
import Swirl from '@images/long-white-swirl-left.svg'

const Connect = () => {
  return (
    <section className="connect">
        <img className="background-lines-left" src={Swirl} alt="" />
        <div className="container">
            <div className="content">
                <nav>
                    <a href="index.html">Home</a>
                    <a href="contacts.html">Contact</a>
                </nav>
                <h1>Let's Connect</h1>
            </div>
        </div>
    </section>
  )
}

export default Connect