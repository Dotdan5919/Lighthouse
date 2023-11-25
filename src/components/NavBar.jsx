import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faClose, faGrinHearts, faHeart, faNavicon, faSearch } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Assets/icons/Nav.svg'
import { Link,scroller,animateScroll,Events } from 'react-scroll'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import eventBus from '../eventBus'
import Aboutus from '../sections/Aboutus'

const NavBar = (props) => {

    const[navActive,setNavActive]=useState(props.active);
    const[location,setlocation]=useState(useLocation().pathname);

    const [searchInput,setSearchInput]=useState(false);
    const [toggleClass,setToggleClass]=useState("hidden");
    const [inputRefActive,setInputRefActive]=useState(false);
    const cartref=useRef(null);
    const aboutref=useRef(null);
    const inputref=useRef(null);







    const navHide="text-white  lg:flex hidden  lg:flex-row flex-col gap-10 items-center lg:relative lg:bg-inherit lg:w-auto lg:h-auto w-[100vw] h-[100vh] justify-center bg-inherit fixed row-span-full col-start-7" ;
    const navShow="text-white    lg:flex flex lg:flex-row flex-col gap-10 items-center lg:relative lg:bg-inherit lg:w-auto lg:h-auto w-[100vw] h-[100vh] justify-center bg-myblack fixed row-span-full col-start-7" ;

    const id=useParams();
    
    


      // window.addEventListener('storage', handleStorage())
      eventBus.on("favAdded", (data) => {
        
        const favouriteRaw=localStorage.getItem("favourite");
        const favourite=JSON.parse(favouriteRaw);
  
        
        setFavLength(favourite.length);
      
        // console.log({ message: data.message });
      });
      eventBus.on("cartAdded", (data) => {
        
        const cartRaw=localStorage.getItem("cart");
        const cart=JSON.parse(cartRaw);
  
        
        setCartLength(cart.length);
      
        // console.log({ message: data.message });
      });

      eventBus.on("favRemoved", (data) => {
        
        const favouriteRaw=localStorage.getItem("favourite");
        const favourite=JSON.parse(favouriteRaw);
  
        
        setFavLength(favourite.length);
      
        // console.log({ message: data.message });
      });
      eventBus.on("cartRemoved", (data) => {
        
        const cartRaw=localStorage.getItem("cart");
        const cart=JSON.parse(cartRaw);
  
        
        setCartLength(cart.length);
      
        // console.log({ message: data.message });
      });


    const [favLength,setFavLength]=useState();
    const [cartLength,setCartLength]=useState();
    
    const handleSearch=()=>
{
  

if(inputref.current.value==="")
{

  searchInput?setSearchInput(false):setSearchInput(true);
  setInputRefActive(false);

}

else{

  setInputRefActive(true);


}
  


}

    
    useEffect(()=>{ 
     
      
      const favouriteRaw=localStorage.getItem("favourite");
      const favourite=JSON.parse(favouriteRaw);
      const cartRaw=localStorage.getItem("cart");
      const cart=JSON.parse(cartRaw);
      if(favourite && favourite.length>0)
      {
        setFavLength(favourite.length);
  
      }
      else{
        setFavLength(0);
  
      }
  
  
      if(cart && cart.length>0)
      {
  
        setCartLength(cart.length);
  
      }
    
      else{
  
        setCartLength(0);
  
      }

  
      
    

      

      switch (id.id){

        case "about":
          // animateScroll.scrollTo(600);
          
          aboutref.current?.scrollIntoView({ behavior: 'smooth'  });
        break;
        case "catalog":
          // cartref.current?.scrollIntoView({ behavior: 'smooth'  });

          // animateScroll.scrollTo(1900);
        break;

        case "contact":
          animateScroll.scrollToBottom();
        break;


        default:



      }

searchInput?setToggleClass("flex  "):setToggleClass("hidden");




    } ,[id,searchInput])
  
   

  const scroll=animateScroll;
  
// const navigate=useNavigate();
  const goToHome=async(element)=>{
    

    // await navigate('/');
      
      // await scroll.scrollTo(element,{
      //   duration:500,
      //   smooth:true,
      //   offset:-75,
      //   spy:true});
      
      
      };



   

  return (

    <nav className='bg-myblack w-full h-[80px] lg:grid flex grid-cols-12 justify-between fixed lg:px-[100px]   z-[999] '>
    
      <div className="nav-container flex xxs:p-5 p-0 items-center justify-between xxs:gap-20 gap-5 hover:opacity-80 transition-all duration-700">  
<img src={Nav} alt="" srcset="" className='w-8 flex lg:hidden ' onClick={()=>{ navActive?setNavActive(false):setNavActive(true) }} />

<div className="logo hover:opacity-80 hover:text-yellow-50 cursor-default text-white transition-all duration-1000">
<h1>

{ location==="/"? ( <Link to="hero" duration={400} offset={50} smooth={true}> LightHouse</Link> ) :  
( <NavLink to="/" onClick={()=>{setlocation('/')}} duration={400} offset={50} smooth={true}> LightHouse</NavLink> )   }


</h1>
<p className='text-[10px] text-white'>designers lamp</p>

</div>
</div>

{ location==="/"?
(<ul className={navActive?navShow :navHide}>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50  gap-7  cursor-pointer' onClick={()=>{setNavActive(false);alert("hi")}}><Link activeClass="activenav" to="about" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} onClick={()=>{setNavActive(false)}} >About</Link></li>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50 gap-7   cursor-pointer' onClick={()=>{setNavActive(false);alert("hi")}}><Link activeClass="activenav" to="catalog" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-190} onClick={()=>{setNavActive(false)}}>Catalog</Link></li>
    <li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7  cursor-pointer' onClick={()=>{setlocation('/shoppingcart');setNavActive(false)}}><NavLink activeClass="activenav" to="shoppingcart" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} onClick={()=>{setNavActive(false)}} >Delivery</NavLink></li>
    <li className='relative w-auto flex flex-col hover:opacity-80 hover:text-yellow-50 gap-7   cursor-pointer' ><Link activeClass="activenav" to="footer" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} onClick={()=>{setNavActive(false)}} >Contacts</Link></li>

    {navActive?   (<FontAwesomeIcon icon={faClose} onClick={()=>{navActive?setNavActive(false):setNavActive(true)}} className='absolute top-10 left-10 flex lg:hidden'/> ) :null }

    
</ul>):(<ul className={navActive?navShow :navHide} >
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50  gap-7' onClick={()=>{setlocation('/');setNavActive(false)}}><NavLink activeClass="activenav" to="about"  className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow '  duration={500} smooth={true} spy={true}   offset={-200} >About</NavLink></li>
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7 ' onClick={()=>{setlocation('/');setNavActive(false)}}><NavLink activeClass="activenav" to="catalog" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-190} >Catalog</NavLink></li>
<li className='relative w-auto flex flex-col   hover:opacity-80 hover:text-yellow-50 gap-7 ' onClick={()=>{setlocation('/shoppingcart');setNavActive(false)}}><NavLink activeClass="activenav" to="shoppingcart" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow  '  duration={500} smooth={true} spy={true}   offset={-200} >Delivery</NavLink></li>
<li className='relative w-auto flex flex-col  hover:opacity-80 hover:text-yellow-50 gap-7 ' onClick={()=>{setlocation('/');setNavActive(false)}}><NavLink activeClass="activenav" to="contact" className='after:block after:border after:rounded-lg after:hidden hover:after:flex  after:border-yellow'  duration={500} smooth={true} spy={true}   offset={-200} >Contacts</NavLink></li>

{navActive?   (<FontAwesomeIcon icon={faClose} onClick={()=>{navActive?setNavActive(false):setNavActive(true)}} className='absolute top-10 left-10 flex lg:hidden'/> ) :null }


</ul>)


}




<div className="flex gap-5 items-center row-span-full lg:col-end-13 lg:p-0 p-9 ">
<div className="flex relative justify-center items-center">
<input type="text" placeholder='Search' className={"absolute bg-transparent  border-white border-2 p-1 rounded-md text-white mr-[170px] transition-all duration-500 delay-150 ease-in  "+ toggleClass}  ref={inputref} />
{location==="/"?

    inputRefActive?(
      <NavLink to="catalog/name" className="z-[999]" duration={500} smooth={true} spy={true}   offset={-200}>
      <FontAwesomeIcon icon={faSearch} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50  cursor-pointer' onClick={()=>{handleSearch()}}/>
      </NavLink>):( <FontAwesomeIcon icon={faSearch} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50 z-[999] cursor-pointer' onClick={()=>{handleSearch()}}/>
      )
    
    
    :   

    inputRefActive?(
      <NavLink to="catalog/" className="z-[999]" duration={500} smooth={true} spy={true}   offset={-200} onClick={()=>{setlocation('/');setNavActive(false)}}>
      <FontAwesomeIcon icon={faSearch} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50  cursor-pointer' onClick={()=>{handleSearch()}}/>
      </NavLink>):( <FontAwesomeIcon icon={faSearch} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50 z-[999] cursor-pointer' onClick={()=>{handleSearch()}}/>
      )



}






</div>
<NavLink exact to="favourite" className="relative" onClick={()=>{setlocation('/favourite')}}>{ favLength>0 ? (
  <div className="rounded-full w-2 h-2 flex justify-center items-center -top-1 left-3 bg-gray-300 p-2 absolute">
  <p>{favLength}</p>
</div>

) :" "

}


<FontAwesomeIcon icon={faHeart} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
</NavLink>

<NavLink exact to="shoppingcart" className="relative" onClick={()=>{setlocation('/shoppingcart')}}  >

{ cartLength>0 ? (
  <div className="rounded-full w-2 h-2 flex justify-center items-center -top-1 left-3 bg-gray-300 p-2 absolute">
  <p>{cartLength}</p>
</div>

) :" "

}

<FontAwesomeIcon icon={faCartShopping} color='white'  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
</NavLink>


</div>



    </nav>
  )
}

export default NavBar
