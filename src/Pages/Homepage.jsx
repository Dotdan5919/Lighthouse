import React from 'react'


import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import SectionTwo from '../sections/SectionTwo'

const Homepage = ({section}) => {
  return (
    <div>
 
      <main  >
      <Hero/>
      <SectionTwo section={section} />


      <Footer/>

      </main>
      </div>
  )
}

export default Homepage
