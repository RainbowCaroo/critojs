import React from 'react'
import { Link } from 'react-router-dom'
import Article1 from '@images/article-image-1.png'
import Article2 from '@images/article-image-2.png'
import Article3 from '@images/article-image-3.png'
import Article4 from '@images/article-image-4.png'

const Project = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <Link className="project" to="#">
                    <img src={Article1} alt="A mans hands reading a buisness paper" />
                    <h3>Grow your business</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                </Link>
                <Link className="project" to="#">
                    <img src={Article2} alt="Pink Apple products on a desk" />
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                </Link>
                <Link className="project" to="#">
                    <img src={Article3} alt="Desk with office supplies" />
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                </Link>
                <Link className="project" to="#">
                    <img src={Article4} alt="Laptop with Business Intelligence Insights" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                </Link>
            </div>
            <div className="center-content">
                <Link className="btn-black" to="/projects">All Recent Projects <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default Project