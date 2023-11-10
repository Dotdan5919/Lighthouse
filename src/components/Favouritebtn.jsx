import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Favouritebtn = () => {
  return (
    <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-300 hover:shadow-lg  hover:bg-gray-600 hover:text-yellow-200">
    <FontAwesomeIcon icon={faHeart} className=' p-10 text-[10px] '/>
    </div>
  )
}

export default Favouritebtn
