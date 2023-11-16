import React from 'react'
import CritoLogo from '@images/logotype.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="logotype">
                <a href="index.html">
                    <img src={CritoLogo} alt="crito logotype" />
                </a>
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
                <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="mainmenu">
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="service.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contacts.html">Contact</a>
                </nav>
                    <a className="btn-yellow btn-login " href="login.html">Login <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </header>
  )
}

export default Header