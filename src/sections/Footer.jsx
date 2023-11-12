import { faArrowLeft, faArrowRight, faMarsStroke, faPhone, faRefresh, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-myblack grid sm:gap-0 gap-7 sm:grid-cols-10 sm:grid-rows-1  grid-cols-2 grid-rows-2  lg:py-20 lg:px-60 py-7 px-10 text-white  ' id="footer">

<div className="flex items-start flex-col sm:col-span-2 gap-2 cursor-pointer">
    <h1 className=' font-semibold mb-7'>Newsletter</h1>
    <form action=""> 
    <div className="grid grid-cols-7"> 
    
    <input type="text"  placeholder='Your Email' className='bg-myblack p-2 outline-none text-[12px] border-white border-2 col-span-full col-start-1 row-span-full'/>
    <FontAwesomeIcon icon={faArrowRight}  className='row-span-full col-start-7 self-center'/>
    
    </div>
    </form>
    <p>Signup to receive Newsletter</p>
</div>


<div className="flex flex-col gap-4 sm:col-end-6  cursor-pointer">
    <h1 className=" mb-7 font-semibold">Company</h1>
    <p>About</p>
    <p>FAQ</p>
    <p>Careers</p>
    <p>Delivery</p>
    <p>Contact us</p>
    <p>Terms</p>
</div>



<div className="flex flex-col sm:col-span-2 gap-5 sm:col-end-10 cursor-pointer">
    <h1 className=" font-semibold mb-7">Shopping</h1>
    <p className='flex gap-4'> <FontAwesomeIcon icon={faShippingFast} className='text-[17px]'/> Free Shipping Worldwide</p>
    <p className='flex gap-4'><FontAwesomeIcon icon={faRefresh} className='text-[17px]'/>  Free 30days Shipping</p>
    <p className='flex gap-4'><FontAwesomeIcon icon={faMarsStroke} className='text-[17px]'/>2-years Warranty</p>
</div>


<div className="flex flex-col sm:col-span-2 gap-7 sm:col-end-13 cursor-pointer">
<div className="flex flex-col sm:items-end"> 
    <h1 className=" font-semibold flex gap-2 items-center justify-center"><FontAwesomeIcon icon={faPhone} className='text-[17px]'/>+44 7440 963 952</h1>
    <p>order a call</p>
    </div>
    <div className="flex justify-between">
        <p>Inst</p>
        <p>FB</p>
        <p>TW</p>
    </div>

    </div>

      
    </div>
  )
}

export default Footer
