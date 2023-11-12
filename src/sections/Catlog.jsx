import React, { useEffect, useState } from 'react'
import CatlogCard from '../components/CatlogCard.jsx'

import { CatalogList } from '../Data/CatalogList.js';
import RegularBtn from '../components/RegularBtn.jsx';

const Catlog = () => {
   
  const[catalogArray,setCatlogArray]=useState(4);
  const[slideleft,setSlideleft]=useState("");
  


  
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
 
 
  useEffect((hide)=>{

    
    


  },[catalogArray]);
 
 

 



  return (
    <div className='flex gap-10 flex-col mt-10' id="catalog">
    <h1 className="text-myblack font-bold text-xl">
    
    Catalog
    </h1>
<div className="grid sm:grid-cols-2  gap-10 " id={slideleft}>

{newCatalogArray.map((cat)=>{


return ( <CatlogCard name={cat.name} id={cat.id} description={cat.description} price={cat.price} source={cat.image} /> )

})}




</div>
<div className="w-full flex justify-center">
<div className={hide} onClick={()=>{setSlideleft("slideleft")   ; setTimeout(() => {
  setCatlogArray(catalogArray-4);
}, 400); }}>  
<RegularBtn name="previous" type="previous" />
</div>
<div className={hide2} onClick={()=>{setSlideleft("slideleft") ; setTimeout(() => {
  setCatlogArray(catalogArray+4);
}, 400); }}>  
<RegularBtn name="view more" type="black" />
</div>
</div>
      
    </div>
  )
}

export default Catlog
