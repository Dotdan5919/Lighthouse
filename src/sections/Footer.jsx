import React from 'react'

const Footer = () => {
  return (
    <div className='bg-myblack grid gridcols-10'>

<div className="flex items-start">
    <h1>Newsletter</h1>
    <div className="flex"> 
    <input type="text" />

    </div>
    <p>Signup to receive Newsletter</p>
</div>


<div className="flex flex-col">
    <h1>Company</h1>
    <p>About</p>
    <p>FAQ</p>
    <p>Careers</p>
    <p>Delivery</p>
    <p>Contact us</p>
    <p>Terms</p>
</div>



<div className="flex flex-col">
    <h1>Shopping</h1>
    <p>Free Shipping Worldwide</p>
    <p>Free 30days Shipping</p>
    <p>2-years Warranty</p>
</div>


<div className="flex flex-col">
<div className="flex flex-col"> 
    <h1>+447440963952</h1>
    <p>order a call</p>
    </div>
    <div className="flex">
        <p>Inst</p>
        <p>FB</p>
        <p>TW</p>
    </div>

    </div>

      
    </div>
  )
}

export default Footer
