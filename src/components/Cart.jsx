import { faArrowLeft, faCartShopping, faClose, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import RegularBtn from './RegularBtn'
import eventBus from '../eventBus'

const Cart = ({name,description,price,image,changeArray}) => {

// 



const CartRaw=localStorage.getItem("cart"); //get the cart from local storage
 const CartNumRaw=localStorage.getItem("cartNum");  //get the cart num from local storage

 const cart=JSON.parse(CartRaw);   //convert the value
 const cartNum=JSON.parse(CartNumRaw); //convert the value
 const cartIndex=cart.indexOf(name); 
 








const [value,setValue]=useState(cartNum[cartIndex]);


useEffect(()=>

{


  cartNum.splice(cartIndex,1,value); //this means that anytime value changes the converted cart num array is replaced with the new value

 
  localStorage.setItem("cartNum",JSON.stringify(cartNum));
  eventBus.dispatch("cartAmountAdded");
  



},[value])



const handleClose=() =>{

 
 



  if(cart.includes(name))
  {

    cart.splice(cart.indexOf(name),1);
    cartNum.splice(cart.indexOf(name),1);



  }
localStorage.setItem("cart",JSON.stringify(cart));
localStorage.setItem("cartNum",JSON.stringify(cartNum));

changeArray(cart);
eventBus.dispatch("cartAdded");
  eventBus.dispatch("cartAmountAdded");





}


const handlePlus=() =>
{

  if(value<7){ 
setValue(value+1);




}

}

const handleMinus=() =>
{

  if(value>1){

    
setValue(value-1);



}


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
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1 shadow-md' onClick={()=>handleMinus()}>-</button>
            <p className='text-[12px] h-fit  font-bold'>{value}</p>
            <button className=' bg-gray-100 hover:opacity-70 w-20 h-2 justify-center items-center flex rounded-full p-1 shadow-md' onClick={()=>handlePlus()}>+</button>


            </div>
            <div className="lg:col-start-9 lg:row-start-auto row-start-2 sm:col-start-5 xxs:col-start-6 col-start-7 self-center"> 
            <h1 className="price font-bold  ">${price}</h1>
            <small className='text-[10px]'>${price *value}</small>
            </div>

            <div className=" xxs:col-start-11 col-start-14    self-center" >
            <FontAwesomeIcon icon={faClose} onClick={()=>handleClose()}  className='hover:shadow-lg'/>
            </div>
            </div>
  )
}

export default Cart
