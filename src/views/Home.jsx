import React from 'react'
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
import Header from '@components/Header'
import Showcase from '@components/Showcase'
import Footer from '@components/Footer'
import CompanyLogos from '../components/CompanyLogos'
import Features from '../components/Features'
import Company from '../components/Company'
import Services from '../components/Services'
import ChooseUs from '../components/ChooseUs'
import Project from '../components/Project'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Articles from '../components/Articles'
import Newsletter from '../components/Newsletter'


const Home = () => {
  return (
    <div className='wrapper-grid'>
        <Header />
        <main>
        <Showcase />
        <CompanyLogos />
        <Features />
        <Company />
        <Services />
        <ChooseUs />
        <Project />
        <Team />
        <Testimonial />
        <Articles />
        <Newsletter />
        </main>
        <Footer />
    </div>
  )
}

export default Home