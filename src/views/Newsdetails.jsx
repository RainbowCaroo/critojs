import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/Articles'
import NewsArticles from '../components/NewsArticles'

const Newsdetails = () => {
  return (
    <div className='wrapper-grid'>
        <Header />
        <main>
            <NewsArticles />
            Newsdetails
            <div className='background-color'><Articles /></div>
        </main>
        <Footer />
    </div>
  )
}

export default Newsdetails