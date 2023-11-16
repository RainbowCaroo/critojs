import React from 'react'
import Paperz from '@images/logo-paperz.svg'
import Dorfus from '@images/logo-dorfus.svg'
import Martino from '@images/logo-martino.svg'
import Square from '@images/logo-square.svg'
import Gobona from '@images/logo-gobona.svg'

const CompanyLogos = () => {
  return (
    <section className="logos">
        <div className="container">
            <img src={Paperz} alt="Logo of the brand Paperz" />
            <img src={Dorfus} alt="Logo of the brand Dorfus" />
            <img src={Martino} alt="Logo of the brand Martino" />
            <img src={Square} alt="Logo of the brand Square" />
            <img src={Gobona} alt="Logo of the brand Gobona" />
        </div>
    </section>
  )
}

export default CompanyLogos