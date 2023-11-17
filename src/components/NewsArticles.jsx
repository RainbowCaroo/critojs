import React from 'react'
import { Link } from 'react-router-dom'
import Swirl from '@images/long-white-swirl-left.svg'

const NewsArticles = () => {
  return (
    <section className="news-articles">
        <img className="background-lines-left" src={Swirl} alt="" />
        <div className="container">
            <div className="content">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                </nav>
                <h1>News & Articles</h1>
            </div>
        </div>
    </section>
  )
}

export default NewsArticles