import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SliderBtn from '../components/SliderBtn'

const Instagram = () => {

    const handleClickLeft=()=>
    {

        let slider=document.getElementById('slider');
        slider.style.scrollBehavior="smooth";

        slider.scrollLeft-=1000;
    }
    const handleClickRight=()=>
    {
        let slider=document.getElementById('slider');
        slider.style.scrollBehavior="smooth";
        slider.scrollLeft+=1000;
    }

  return (
    <div className=' gap-10 flex flex-col py-8' id="instagram">
      <h1 className='text-myblack font-bold text-xl' >Instagram</h1>
      <p className='leading-relaxed text-left w-[70%] text-[13px]'>Please check out instagram.
      We post reviews of our 
      favorite customers who have 
      already  purchased and built into 
      their interior our designer lamps, perhaps this will help you choose your
      own</p>
    
    <div className='flex justify-center items-center gap-5 ' >
    <SliderBtn name="left" _class=""   click={handleClickLeft} />
      <div className="w-[100%] gap-10 jusify-center items-center overflow-scroll" id="slider">
    
   
    <div className="flex grid-rows-1 grid-flow-col w-full bg-teal-100 h-96">
    
    <img src="https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover' />
    <img src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://plus.unsplash.com/premium_photo-1670914333012-f4093b108aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1558618062-55384ca51256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbXBzfGVufDB8fDB8fHww" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1592195986398-5484c0890b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbXBzfGVufDB8fDB8fHww" alt="" className='w-full h-auto object-cover'/>
    <img src="https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto object-cover'/>


    </div>
    </div>

    <SliderBtn name="right" click={handleClickRight} />

    
    </div>


    <p className="underline cursor-pointer">go to profile <FontAwesomeIcon icon={faArrowRight}/></p>

    </div>
  )
}

export default Instagram
