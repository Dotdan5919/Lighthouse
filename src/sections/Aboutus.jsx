import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom';

const Aboutus = () => {

  const aboutref=useRef(null);
  const id =useParams();


  useEffect(()=>
  {


if(id.id)
{


aboutref.current?.scrollIntoView({behavior:'smooth'});

}



  })

  return (
    <div className='flex  flex-col lg:gap-40 gap-20 text-myblack' id="about" ref={aboutref}>
    <div className="flex flex-col gap-5"> 
      <h1 className='text-xl font-bold'>About Us</h1>  
      <p className='lg:w-[70%] w-full  text-[13px] leading-relaxed'>Since our humble beginnings in 2006, 
      Lighthouse has significantly expanded
      its collection of exclusive lamps. Today
      we are proud to present you our best lighting design solutions. Our collection
      is updated every day with beautiful
      solutions and we are glad that you, our
      customers, support us on our way! </p></div>

      <div className="grid lg:grid-cols-2  gap-6 grid-rows-2  text-black ">
      
    <div className="img-container    overflow-hidden object-fill">
    <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFtcHN8ZW58MHx8MHx8fDA%3D" className="object-fill" alt="" />
    </div>

    <p className='self-center text-[13px] leading-relaxed'>We know that a modern design 
    aesthetic can apply to everything
    from stark-white minimalism
    to an eclectic space that blends old
    and new styles-not to mention everything in between. Modern design
    should have perspective. It should be in our world comfortable, and easy on the eyes. But most importantly,It should be about you.</p>

    <p className='self-center text-[13px] leading-relaxed'>This is why we are proud to offer
    a wide selection of our designer
    ceiling,wall,floor and table lamps.
    You will also find products ranging
    from modern styles, modern interpretations of classic design, and 
    works by independent studio. We want you to be able to find the right product for any of your goals in designing the interior design of your house.</p>

    <div className="img-container  overflow-hidden">
    <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbXBzfGVufDB8fDB8fHww" alt="" />
    </div>
      
      
      </div>




    </div>
  )
}

export default Aboutus
