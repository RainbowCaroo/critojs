import React from 'react'
import { Link } from 'react-router-dom'
import Handshake from '@images/icon-handshake.svg'
import Lightbulb from '@images/icon-lightbulb.svg'
import Stocks from '@images/icon-stocks.svg'
import Cube from '@images/icon-cube.svg'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <div className="center-content"><Link className="btn-yellow" to="/news">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></div>
            </div>
            <div className="icon-info">
                <div className="business-advice">
                    <img src={Handshake} alt="Icon of a handshake" />
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="icon-info">
                <div className="startup-business">
                    <img src={Lightbulb} alt="Icon of a lightbulb" />
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="icon-info">
                <div className="financial-advice">
                    <img src={Stocks} alt="Icon of stocks going up" />
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="icon-info">
                <div className="risk-management">
                    <img src={Cube} alt="Icon of a cube with a cogwheel" />
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Features