import React from 'react'
import { Link } from 'react-router-dom'
import Swirl from '@images/long-white-swirl-left.svg'

const Connect = () => {
  return (
    <section className="connect">
        <img className="background-lines-left" src={Swirl} alt="" />
        <div className="container">
            <div className="content">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <h1>Let's Connect</h1>
            </div>
        </div>
    </section>
  )
}

export default Connect