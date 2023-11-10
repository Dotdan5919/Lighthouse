import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SliderBtn = ({name,type,_class,click}) => {

const Classes="rounded-full w-8 h-8 flex items-center justify-center bg-gray-50 hover:shadow-lg  hover:bg-gray-600 hover:text-yellow-200 ";

const AllClasses=Classes + _class;

    if(name==="left")
  return (
     
    <div className={AllClasses + " " + _class} onClick={click} >
    
    <FontAwesomeIcon icon={faArrowLeft}  />
    
    </div>


  )


  else if (name==="right")

  return(
    <div className={AllClasses + " " + _class} onClick={click} >
    
    <FontAwesomeIcon icon={faArrowRight}   />
    
    </div>


  )
}

export default SliderBtn
