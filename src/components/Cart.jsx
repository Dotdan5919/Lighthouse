import { faArrowLeft, faCartShopping, faClose, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import RegularBtn from './RegularBtn'

const Cart = () => {
  return (
    <div className="item grid grid-cols-11 p-7 gap-20">
            <div className='w-32 h-32 overflow-hidden flex shadow-lg'><img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='object-cover w-full h-full' /></div>
            <div className="flex col-span-4 col-start-3  flex-col gap-3">   
            <h1 className='font-bold text-[17px]'>Blossi Lamp</h1>
            <p>Since our humble beginnings in 2006, LightHouse has significantly expanded its collection of exclusive</p>
            </div>
            <div className="nav flex gap-2 items-center justify-center text-lg ">
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1'>-</button>
            <p className='text-[12px] h-fit font-bold'>3</p>
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1'>+</button>


            </div>

            <h1 className="price font-bold col-start-9 self-center">$399</h1>

            <div className=" col-start-11 self-center">
            <FontAwesomeIcon icon={faClose} />
            </div>
            </div>
  )
}

export default Cart
