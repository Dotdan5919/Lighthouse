import { faArrowLeft, fafavouriteShopping, faClose, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import RegularBtn from './RegularBtn'
import eventBus from '../eventBus'

const Favourite = ({name,description,price,image,changeArray}) => {


const handleClose=() =>


{

  const favouriteRaw=localStorage.getItem("favourite");
  const favourite=JSON.parse(favouriteRaw);

  if(favourite.includes(name))
  {

    favourite.splice(favourite.indexOf(name),1);

  }
localStorage.setItem("favourite",JSON.stringify(favourite));
changeArray(favourite);
eventBus.dispatch("favAdded");




}





  return (
    <div className="item lg:grid grid grid-cols-10 lg:grid-rows-none grid-rows-1   lg:grid-cols-11   p-7 lg:gap-20  ">
            <div className='w-32 h-32 overflow-hidden flex L shadow-lg'>
            <img src={image} alt="" className='object-cover w-full h-full' /></div>
            <div className="flex col-span-4 lg:col-start-3 sm:col-start-5   xxs:col-start-6 col-start-7 flex-col gap-3">   
            <h1 className='font-bold text-[17px]'>{name}</h1>
            <p>{description}</p>
            </div>
            <div className="nav flex gap-2 items-center justify-center text-lg lg:bg-none    rounded-lg sm:col-start-7 xxs:col-start-9 col-start-7 px-6 row-start-3 xxs:row-start-2 lg:row-start-auto lg:col-start-auto ">
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1 shadow-md'>-</button>
            <p className='text-[12px] h-fit  font-bold'>3</p>
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1 shadow-md'>+</button>


            </div>

            <h1 className="price font-bold lg:col-start-9 lg:row-start-auto row-start-2 sm:col-start-5 xxs:col-start-6 col-start-7 self-center ">{price}</h1>

            <div className=" xxs:col-start-11 col-start-14    self-center" >
            <FontAwesomeIcon icon={faClose} onClick={()=>handleClose()}  className='hover:shadow-lg'/>
            </div>
            </div>
  )
}

export default Favourite