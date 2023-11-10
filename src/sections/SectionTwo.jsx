import React from 'react'
import About from './Aboutus'
import Catlog from './Catlog'
import Instagram from './Instagram'
import Footer from './Footer'

const SectionTwo = () => {
  return (
    <div className='w-full lg:py-10 lg:px-60 py-5 px-10'>
      <About/>

      <Catlog/>

      <Instagram />
      <Footer/>
    </div>
  )
}

export default SectionTwo
