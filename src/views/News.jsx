import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import NewsArticles from '../components/NewsArticles'

const News = () => {
  return (
    <div className='wrapper-grid'>
        <Header />
        <main>
            <NewsArticles />
            News
            <Newsletter />
        </main>
        <Footer />
    </div>
  )
}

export default News