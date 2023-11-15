import React, { useEffect } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import eventBus from '../eventBus'

const Favouritebtn = ({name}) => {

  // add to favourite list
  const handleClick=()=>{
    
    const favourite=localStorage.getItem("favourite");  //call for the favourite 
    const newVal=JSON.parse(favourite);  //convert  json
    if(newVal.find((newV)=>{return newV===name})){

// do nothing
    }
    else{
      newVal.push(name);
    }

    
    localStorage.setItem('favourite', JSON.stringify(newVal));
    console.log(localStorage.getItem("favourite"));
    eventBus.dispatch("couponApply", { message: "coupone applied" });

  };
  useEffect(()=>

  {
    
  },
[
  name
]

  )






  return (
    <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-300 hover:shadow-lg  hover:bg-gray-600 hover:text-yellow-200"
    onClick={handleClick}
    
    >
    <FontAwesomeIcon icon={faHeart} className=' p-10 text-[10px] '/>
    </div>
  )
}

export default Favouritebtn
