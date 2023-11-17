import React from 'react'
import { Link } from 'react-router-dom'
import LongWhiteSwirlLeft from '@images/long-white-swirl-left.svg'
import ShowcaseImage from '@images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
      <img className="background-lines-left" src={LongWhiteSwirlLeft} alt="" />
      <div className="container">
          <div className="content">
              <h1>We Provide The Best Business Solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <Link className="btn-yellow" to="/consulting">Get Consulting <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              <Link className="btn-transparent" to="/service">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
          </div>
          <img src={ShowcaseImage} alt="image of a man in a suit with a tablet" />
      </div>
    </section>
  )
}

export default Showcase