import React, { useEffect } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import eventBus from '../eventBus'

const Favouritebtn = ({name}) => {

  // add to favourite list
  const handleClick=()=>{
    


    const favourite=localStorage.getItem("favourite");  //call for the favourite 
    
    if(favourite)
    {

      const newVal=JSON.parse(favourite);  //convert  json


      if (!newVal.includes(name)) {
        newVal.push(name);
      } else {
        newVal.splice(newVal.indexOf(name), 1);   
      }
  
      
      localStorage.setItem('favourite', JSON.stringify(newVal));
      console.log(localStorage.getItem("favourite"));
      eventBus.dispatch("favAdded");
  
      console.error("i dey here favourite");
      
  
  
    }


  

    else{
      console.error("error guy");
      let Favourite=[name];         //initiating Favourite array for storing favourite values

  
      let stringfyFav=JSON.stringify(Favourite);
    
     
       localStorage.setItem("favourite",stringfyFav);

       eventBus.dispatch("favAdded"); 


    }
  }
   
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
