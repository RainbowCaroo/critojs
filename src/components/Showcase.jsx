import React from 'react'
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
              <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <img src={ShowcaseImage} alt="image of a man in a suit with a tablet" />
      </div>
    </section>
  )
}

export default Showcase