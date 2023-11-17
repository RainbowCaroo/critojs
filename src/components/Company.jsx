import React from 'react'
import { Link } from 'react-router-dom'
import Samantha from '@images/samantha-brown.png'
import WhiteSwiggle from '@images/image/white-swiggle.svg'

const Company = () => {
  return (
    <section className="company">
        <div className="container">
            <div className="founder-info">
                <img src={Samantha} alt="Picture of the founder Samantha Brown" />
                <img className="swiggle" src={WhiteSwiggle} alt="" />
                <div className="info">                         
                        <h2>Samantha Brown, <p className="red">Founder</p></h2>
                    <p>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    </p>
                </div>
            </div>
            <div className="about-company">
                <div className="section-title">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet</p>
                <div className="links">
                    <Link className="btn-black" to="/service">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <a className="btn-transparent" href="#" target="_blank"><i className="fa-solid fa-play"></i></a>
                    <a className="link" href="#">Intro Video</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company