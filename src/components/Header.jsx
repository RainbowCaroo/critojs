import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CritoLogo from '@images/logotype.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="logotype">
                <Link to="/">
                    <img src={CritoLogo} alt="crito logotype" />
                </Link>
            </div>
            <div className="contactinfo-bar">
                    <div className="content-box">
                        <i className="fa-solid fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com 
                    </div>
                    <div className="content-box last">
                        <i className="fa-solid fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
            </div>
            <div className="socialmedia-bar">
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="mainmenu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                    <Link className="btn-yellow btn-login " to="/login">Login <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
            </div>
        </div>
    </header>
  )
}

export default Header