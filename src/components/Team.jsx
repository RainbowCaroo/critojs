import React from 'react'
import { Link } from 'react-router-dom'
import Kristine from '@images/kristine-palmer.png'
import Mark from '@images/mark-aubri.png'
import Kimberly from '@images/kimberly-hansen.png'
import Justin from '@images/justin-willoman.png'
import Dots from '@images/dots-2.svg'

const Team = () => {
  return (
    <section className="team">
        <div className="container">
            <div className="title-and-btn">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <Link className="btn-transparent" to="/teams">Browse Team <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>                        
            </div>
            <div className="meet-our-team">
                <div className="team-members">
                    <img src={Kristine} alt="Picture of team member Kristine Palmer" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="team-members">
                    <img src={Mark} alt="Picture of team member Mark Aubri" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-members">
                    <img src={Kimberly} alt="Picture of team member Kimberly Hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-members">
                    <img src={Justin} alt="Picture of team member Justin Willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="center-content"><img src={Dots} alt="" /></div>
        </div>
    </section>
  )
}

export default Team