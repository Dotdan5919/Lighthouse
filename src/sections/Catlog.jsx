import React, { useEffect, useState } from 'react'
import CatlogCard from '../components/CatlogCard.jsx'

import { CatalogList } from '../Data/CatalogList.js';
import RegularBtn from '../components/RegularBtn.jsx';
import { animateScroll } from 'react-scroll';
import { Element, scroller } from 'react-scroll';
import eventBus from '../eventBus.js';


const Catlog = () => {
   
  const[catalogArray,setCatlogArray]=useState(4);
  const[slideleft,setSlideleft]=useState(""); 
  let scrollOffset;
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

)
 
  // const scrollOffset=2500;


  
// scroller
const catalogRefresh=()=>{
scroller.scrollTo('myScrollToElement', {
  duration: 1500,
  delay: 100,
  smooth: true,
  containerId: 'catalog',
  offset: 250, // Scrolls to element + 50 pixels down the page
  // ... other options
});



}
  
  let hide;
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
 
 
  useEffect(()=>{

 
  });
 
 

 



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
<div className={hide} onClick={()=>{setSlideleft("slideleft")   ; setTimeout(() => {
  setCatlogArray(catalogArray-4); catalogRefresh(); animateScroll.scrollTo(window.innerHeight+scrollOffset);
}, 400); }}>  
<RegularBtn name="previous" type="previous" />
</div>
<div className={hide2} onClick={()=>{setSlideleft("slideleft") ; setTimeout(() => {
  setCatlogArray(catalogArray+4); catalogRefresh(); animateScroll.scrollTo(window.innerHeight+scrollOffset);
}, 400);  }}>  
<RegularBtn name="view more" type="black" />
</div>
</div>
      
    </div>
  )
}

export default Catlog
