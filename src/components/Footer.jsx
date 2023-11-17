import React from 'react'
import { Link } from 'react-router-dom'
import WhiteSwirlRight from '@images/white-swirl-right.svg'
import WhiteLogo from '@images/logotype-white.svg'

const Footer = () => {
  return (
    <>
        <section className="footer-info">
            <img className="swirl" src={WhiteSwirlRight} alt="" />
            <div className="container">
                <div className="logo-and-info column">
                    <div>
                        <Link to="/">
                            <img src={WhiteLogo} alt="crito logotype" />
                        </Link>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="company column">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="help column">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="resources column">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
                <div className="link column">
                    <h3>Link</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <p>&#169 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="socialmedia-bar">
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer