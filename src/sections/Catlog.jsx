import React, { useEffect, useState } from 'react'
import CatlogCard from '../components/CatlogCard.jsx'

import { CatalogList } from '../Data/CatalogList.js';
import RegularBtn from '../components/RegularBtn.jsx';
import { animateScroll } from 'react-scroll';
import { Element, scroller } from 'react-scroll';
import eventBus from '../eventBus.js';     //this is a link to Eventbus that was created


const Catlog = () => {
   
  const[catalogArray,setCatlogArray]=useState(4);  //setting the number of the array that would be displayed per time
  const[slideleft,setSlideleft]=useState("");     
  let scrollOffset;      ///this variable is used to calculate the extent to which a the browser scrolls when next is pressed on the catalog section
  //
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



}
,[window.innerWidth]
)
 
 

const handleCartMovementClick=(side)=>
{
  let dividen;

  if(side==="previous")
  {
    dividen=-4;
  }
  else if(side==="next"){

    dividen=-4;
  }

 setSlideleft("slideleft") ;
  setTimeout(() => {
    setCatlogArray(catalogArray+dividen);  
    animateScroll.scrollTo(window.innerHeight+scrollOffset);
  }, 400)


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
    hide="w-40 hidden";

  }

  else{

    hide="w-40";
  }
  if(catalogArray>CatalogList.length)
  {

    hide2="w-40 hidden";
  }
  else{

    hide2="w-40";

  }
 





 
  
 
 

 



  return (
    <div className='flex gap-10 flex-col mt-10' id="catalog">
    <h1 className="text-myblack font-bold text-xl" id='catalog'>
    <Element name="myScrollToElement"  id='catalog'>
    Catalog</Element>
    </h1>
<div className="grid sm:grid-cols-2  gap-10 " id={slideleft}>

{newCatalogArray.map((cat)=>{


return ( <CatlogCard name={cat.name} id={cat.id} description={cat.description} price={cat.price} source={cat.image} /> )

})}




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
