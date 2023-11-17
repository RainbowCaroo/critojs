import React from 'react'
import { Link } from 'react-router-dom'
import Stars from '@images/stars.svg'
import Cassandra from '@images/cassandra-warren.png'
import Amanda from '@images/amanda-tulling.png'
import Jack from '@images/jack-mcdogglas.png'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="customers-reviews">
                <div className="reviews">
                    <img src={Stars} alt="5 stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="clients">
                        <img src={Cassandra} alt="" />
                        <div className="names">
                            <h2>Cassandra Warren</h2>
                            <p>Business Manager, Dorfus</p>                                    
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <img src={Stars} alt="5 stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="clients">
                        <img src={Amanda} alt="" />
                        <div className="names">
                            <h2>Amanda Tulling</h2>
                            <p>Senior Developer, Square</p>                                    
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <img src={Stars} alt="5 stars" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="clients">
                        <img src={Jack} alt=""/>
                        <div className="names">
                            <h2>Jack McDogglas</h2>
                            <p>Key Account Manager, Gobona</p>                                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <Link className="btn-black" to="/reviews">All Reviews <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default Testimonial