import React from 'react'
import Header from '@components/Header'
import Connect from '../components/Connect'
import ContactInfo from '../components/ContactInfo'
import Message from '../components/Message'
import Map from '../components/Map'
import Footer from '@components/Footer'


const Contact = () => {
  return (
    <div className='wrapper.grid'>
        <Header />
        <main>
            <Connect />
            <ContactInfo />
            <Message />
            <Map />
        </main>
        <Footer />
    </div>
  )
}

export default Contact