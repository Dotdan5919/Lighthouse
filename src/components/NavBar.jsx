import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faClose, faGrinHearts, faHeart, faNavicon, faSearch } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Assets/icons/Nav.svg'
import { Link,scroller,animateScroll } from 'react-scroll'
import { NavLink, useLocation, useNavigate} from 'react-router-dom'

const NavBar = (props) => {

    const[navActive,setNavActive]=useState(props.active);


    const navHide="text-white  lg:flex hidden  lg:flex-row flex-col gap-10 items-center lg:relative lg:bg-inherit lg:w-auto lg:h-auto w-[100vw] h-[100vh] justify-center bg-inherit fixed row-span-full col-start-7" ;
    const navShow="text-white    lg:flex flex lg:flex-row flex-col gap-10 items-center lg:relative lg:bg-inherit lg:w-auto lg:h-auto w-[100vw] h-[100vh] justify-center bg-myblack fixed row-span-full col-start-7" ;

  const location=useLocation().pathname;
  
  
  const scroll=animateScroll;
  
const navigate=useNavigate();
  const goToHome=async(element)=>{

      
      await scroll.scrollTo(element,{
        duration:500,
        smooth:true,
        offset:-75,
        spy:true});};



    useEffect(()=>{

      

    },);


  return (

    <nav className='bg-myblack w-full h-auto lg:grid flex grid-cols-12 justify-between fixed lg:px-[100px] lg:py-6 px-5 py-5'>
    
      <div className="nav-container flex p-5 items-center justify-between gap-20 hover:opacity-80 transition-all duration-700">  
<img src={Nav} alt="" srcset="" className='w-8 ' onClick={()=>{ navActive?setNavActive(false):setNavActive(true) }} />

<div className="logo hover:opacity-80 hover:text-yellow-50 text-white transition-all duration-1000">
<h1><Link to="hero" duration={400} offset={50} smooth={true}> LightHouse</Link></h1>
<p className='text-[10px] text-white'>designers lamp</p>

</div>
</div>

{ location==="/"?
(<ul className={navActive?navShow :navHide}>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50  gap-7'><Link activeClass="activenav" to="about" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} >About</Link></li>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50 gap-7 '><Link activeClass="activenav" to="catalog" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-190} >Catalog</Link></li>
    <li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7'><Link activeClass="activenav" to="#" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} >Delivery</Link></li>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50 gap-7 '><Link activeClass="activenav" to="footer" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} >Contacts</Link></li>

    {navActive?   (<FontAwesomeIcon icon={faClose} onClick={()=>{navActive?setNavActive(false):setNavActive(true)}} className='absolute top-10 left-10 flex lg:hidden'/> ) :null }

    
</ul>):(<ul className={navActive?navShow :navHide}>
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50  gap-7'><NavLink activeClass="activenav" to="#" onClick={goToHome("about")} className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow '  duration={500} smooth={true} spy={true}   offset={-200} >About</NavLink></li>
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7 '><NavLink activeClass="activenav" onClick={goToHome("about")} className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-190} >Catalog</NavLink></li>
<li className='relative w-auto flex flex-col   hover:opacity-80 hover:text-yellow-50 gap-7'><NavLink activeClass="activenav" to="#" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow  '  duration={500} smooth={true} spy={true}   offset={-200} >Delivery</NavLink></li>
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7 '><NavLink activeClass="activenav" onClick={goToHome("contact")} className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} >Contacts</NavLink></li>

{navActive?   (<FontAwesomeIcon icon={faClose} onClick={()=>{navActive?setNavActive(false):setNavActive(true)}} className='absolute top-10 left-10 flex lg:hidden'/> ) :null }


</ul>)


}




<div className="flex gap-5 items-center p-9 row-span-full lg:col-end-13 ">

<FontAwesomeIcon icon={faSearch} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
<FontAwesomeIcon icon={faHeart} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
<NavLink exact to="shoppingcart" >
<FontAwesomeIcon icon={faCartShopping} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
</NavLink>


</div>



    </nav>
  )
}

export default NavBar
