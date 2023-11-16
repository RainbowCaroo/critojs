import React from 'react'
import Thumb from '@images/icon-thump-up.svg'
import Diamond from '@images/icon-top-diamond.svg'
import Scale from '@images/icon-scale.svg'
import Brain from '@images/icon-cogwheel-brain.svg'
import Meeting from '@images/choose-meeting.png'
import Background from '@images/background.svg'

const ChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="why-us">
                <div className="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="choose">
                    <div className="icon-info">
                        <div className="process-excellence icon-box">
                            <img src={Thumb} alt="Icon of a handshake" />
                            <div className="text">
                                <h3>Process Excellence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-info">
                        <div className="strategic-planning icon-box">
                            <img src={Diamond} alt="Icon of a lightbulb" />
                            <div className="text">
                                <h3>Strategic Planning</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-info">
                        <div className="experience-design icon-box">
                            <img src={Scale} alt="Icon of stocks going up" />
                            <div className="text">
                                <h3>Experience Design</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-info">
                        <div className="artificial inteligence icon-box">
                            <img src={Brain} alt="Icon of a cube with a cogwheel" />
                            <div className="text">
                                <h3>Artificial Inteligence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-pic">
                <img className="meeting" src={Meeting} alt="" />
                <img className="pic-background" src={Background} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ChooseUs