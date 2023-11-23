import React, { useEffect, useRef, useState } from 'react'
import CatlogCard from '../components/CatlogCard.jsx'

import { CatalogList } from '../Data/CatalogList.js';
import RegularBtn from '../components/RegularBtn.jsx';
import { animateScroll } from 'react-scroll';
import { Element, scroller } from 'react-scroll';
import eventBus from '../eventBus.js';     //this is a link to Eventbus that was created

import Events from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

 

const options = {
  // your options here, for example:
  duration: 500,
  smooth: true,
};



const Catlog = () => {
   
  const[catalogArray,setCatlogArray]=useState(4);  //setting the number of the array that would be displayed per time
  const[slideleft,setSlideleft]=useState("");     
  let scrollOffset;      ///this variable is used to calculate the extent to which a the browser scrolls when next is pressed on the catalog section
  //

const[eventTriggered,setEventTriggered]=useState("");



 

eventBus.on("cartAdded", (data) => {


  setEventTriggered("Cart Added");


});
  


eventBus.on("favAdded", (data) => {


  setEventTriggered("Favourite Added");


});
eventBus.on("favRemoved", (data) => {


  setEventTriggered("Favourite Removed");


});

eventBus.on("cartRemoved", (data) => {


  setEventTriggered(   "Cart Removed");


});




  useEffect(()=>{
  if(window.innerWidth>=1024){

    scrollOffset=1400;
    
  }
  else if(window.innerWidth>=768)
  {
   
    scrollOffset=2500;
  }
else{
  
  scrollOffset=1700;
   
}

let timeOutThing;

if(eventTriggered!="")
{
  clearTimeout(timeOutThing);
  timeOutThing=setTimeout(() => {
  
setEventTriggered("");

}, 3000);

}


}
,[window.innerWidth,eventTriggered]
)
 
 
const cartref=useRef(null);


const handleCartMovementClick=(side)=>
{

  const slideMe =(x)=>
  {
    setSlideleft("slideleft") ;
    setTimeout(() => {
      setCatlogArray(x);  
      

    }, 400)

  }

  let sum;

  if(side==="previous")
  {
    sum=catalogArray-4;
    slideMe(catalogArray-4);
    
    
  }
  else if(side==="next"){

    sum=catalogArray+4;
    if(catalogArray===CatalogList.length)
    {
      sum=catalogArray;
      
    }
  
    else{

      slideMe(catalogArray+4);
      
    }

    
    
  }

 

  cartref.current?.scrollIntoView({ behavior: 'smooth'  });

}







  
  let hide;   //this variables are used to hide and display element when transiting to another page
  let hide2;
  if(slideleft==="slideleft"  )
  {

    setTimeout(() => {
      setSlideleft("");
    }, 400);
   

  }
 


  const firstIndex=catalogArray-4;

  const newCatalogArray=CatalogList.slice(firstIndex,catalogArray);

  if(firstIndex<1)
  {
    // if the catalog slidere is in the first slide
    hide="w-40 hidden";

  }

  else{

    hide="w-40";
  }
  if(catalogArray>CatalogList.length)
  {
    // if the catalog slider is in the last slide

    hide2="w-40 hidden";
  }
  else{

    hide2="w-40";

  }
 





 
  
 
 

 



  return (
    <div className='flex gap-10 flex-col mt-10' id="catalog">
    <h1 className="text-myblack font-bold text-xl" id='catalog' ref={cartref}>
    <Element name="myScrollToElement"  id='catalog'>
    Catalog</Element>
    </h1>
<div className="grid sm:grid-cols-2  gap-10 " id={slideleft}>

{newCatalogArray.map((cat)=>{


return ( <CatlogCard name={cat.name} id={cat.id} description={cat.description} price={cat.price} source={cat.image} /> )

})}



{eventTriggered===""?"":(<div className="flex gap-4 justify-center items-center bg-myblack p-7 fixed bottom-10 w-70 text-white rounded-md  animate-bounce ">
{eventTriggered.startsWith("C")? (<FontAwesomeIcon icon={faShoppingBag}/>) : (<FontAwesomeIcon icon={faHeart}/>)}
{eventTriggered}
</div> )}




</div>
<div className="w-full flex justify-center">
<div className={hide} onClick={()=>{handleCartMovementClick("previous")}}>  
<RegularBtn name="previous" type="previous" />
</div>
<div className={hide2} onClick={()=>{handleCartMovementClick("next")}}>  
<RegularBtn name="view more" type="black" />
</div>
</div>
      
    </div>
  )
}

export default Catlog
// the setcartlog array is not setting in the handle click function