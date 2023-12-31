import React from 'react'
import { Link } from 'react-router-dom'
import News1 from '@images/article-news-1.png'
import News2 from '@images/article-news-2.png'
import News3 from '@images/article-news-3.png'
import Dots from '@images/dots-1.svg'

const Articles = () => {
  return (
    <section className="article-news">
        <div className="container">
            <div className="title-and-btn">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Link className="btn-transparent" to="/articles">Browse Articles <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>                        
            </div>
            <div className="article-and-news">
                <Link className="article" to="#">
                    <img src={News1} alt="A woman sitting and smiling in a meetingroom" />
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
                <Link className="article" to="#">
                    <img src={News2} alt="A picture taken on a computerscreen " />
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
                <Link className="article" to="#">
                    <img src={News3} alt="Books about javascript and css laying on a table with a phone on top" />
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
            </div>
            <div className="center-content"><img src={Dots} alt="" /></div>
        </div>
    </section>
  )
}

export default Articles