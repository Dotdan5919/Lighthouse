import { faArrowDownZA, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RegularBtn = (props) => {

    if(props.type==="white")
{  
  return (
    <button className=' flex  justify-center items-center gap-2 p-2 rounded-sm  border-white border-2 text-white hover:bg-white hover:text-myblack transition-all duration-1000  hover:gap-4' >
    {props.name}
    <FontAwesomeIcon icon={faArrowRight} />
    </button>
  )

}

else if(props.type==="previous" ){
    return (
        <button className=' flex  justify-center items-center gap-2 p-2 rounded-sm  border-myblack border-2 text-myblack hover:bg-myblack hover:text-white transition-all duration-1000 hover:gap-4 ' >
        <FontAwesomeIcon icon={faArrowLeft} className='' />
        {props.name}
      
        </button>
      )


}
else if(props.type==="black" ){
    return (
        <button className=' flex  justify-center items-center gap-2 p-2 rounded-sm  border-myblack border-2 text-myblack hover:bg-myblack hover:text-white transition-all duration-1000 hover:gap-4 ' >
        {props.name}
        <FontAwesomeIcon icon={faArrowRight} className='' />
        </button>
      )


}

}

export default RegularBtn
