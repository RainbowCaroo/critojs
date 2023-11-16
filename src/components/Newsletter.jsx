import React from 'react'
import Swiggle from '@images/gray-swiggle.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-gray-lines" src={Swiggle} alt="" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" name="subscribe" id="subscribe" placeholder="username@domain.com" />
                <button className="btn-yellow" type="submit">Subscribe <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter