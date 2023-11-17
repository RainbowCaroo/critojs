import React from 'react'
import { Link } from 'react-router-dom'
import Swirl from '@images/long-white-swirl-right.svg'
import Line from '@images/icon-line.svg'

const Services = () => {
  return (
    <section className="our-services">
        <img className="background-lines-right" src={Swirl} alt="" />
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="services">
                <div className="icon-info">
                    <div className="business-advice">
                        <img src={Line} alt="Icon of a line" />
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <Link className="btn-black" to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="icon-info startup">
                    <div className="startup-business">
                        <img src={Line} alt="Icon of a line" />
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <Link className="btn-transparent" to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="icon-info">
                    <div className="financial-advice">
                        <img src={Line} alt="Icon of a line" />
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <Link className="btn-black" to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="icon-info">
                    <div className="risk-management">
                        <img src={Line} alt="Icon of a line" />
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <Link className="btn-black" to="#"><i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <Link className="btn-transparent" to="/service">Browse Services <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default Services