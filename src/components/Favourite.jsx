import { faArrowLeft, fafavouriteShopping, faClose, faHeart, faSearch, faShoppingBag, faBagShopping, faShoppingBasket, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import RegularBtn from './RegularBtn'
import eventBus from '../eventBus'
import Cart from './Cart'

const Favourite = ({name,description,price,image,changeArray}) => {



  const addToCart=()=>
  {

    

  const cart=localStorage.getItem("cart"); 
  const cartNum=localStorage.getItem("cartNum"); 
  const fav=localStorage.getItem("favourite"); 
  const newFav=JSON.parse(fav);





  
  if(cart && cartNum)
  { 
      //call for the cart
  const newVal=JSON.parse(cart);  //convert to json
  const newValNum=JSON.parse(cartNum);  //convert  json
   //convert  json
  if(!newVal.includes(name)){
    newVal.push(name);
    newValNum.push(1);
    
  eventBus.dispatch("cartAdded");



  }
  else{
   
    // newVal.splice(newVal.indexOf(name),1);
    // newValNum.splice(newVal.indexOf(name),1);


  }

  newFav.splice(newFav.indexOf(name),1);
  
  localStorage.setItem('cart', JSON.stringify(newVal));
  localStorage.setItem('cartNum', JSON.stringify(newValNum));
  localStorage.setItem('favourite',JSON.stringify(newFav));
  

  eventBus.dispatch("favAdded");
  changeArray(newFav);




}

     


  else  {

    let Cart=[name];
    let CartNum=[1];              //initiating Cart array for storing Cart values
                  //initiating Cart array for storing Cart values

    let stringfyCart=JSON.stringify(Cart);
    let stringfyCartNum=JSON.stringify(CartNum);

    newFav.splice(newFav.indexOf(name),1);

    eventBus.dispatch("favRemoved");
    localStorage.setItem("cart",stringfyCart);
    localStorage.setItem("cartNum",stringfyCartNum);
    localStorage.setItem('favourite',JSON.stringify(newFav));


  



  

  eventBus.dispatch("cartAdded");

  changeArray(newFav);


}



  }


const handleClose=() =>


{

  const favouriteRaw=localStorage.getItem("favourite");
  const favourite=JSON.parse(favouriteRaw);

  if(favourite.includes(name))
  {

    favourite.splice(favourite.indexOf(name),1);
    eventBus.dispatch("favRemoved");

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
            <div className="w-[50px] items-center justify-center gap-4 items-center justify-center text-lg lg:bg-none  flex flex-col  rounded-lg sm:col-start-7 xxs:col-start-9 col-start-7 px-2 row-start-3 xxs:row-start-2 lg:row-start-auto lg:col-start-auto hover:text-myblack  "  onClick={()=>addToCart()}>
           <FontAwesomeIcon icon={faShoppingBag} className='hover:shadow-lg'/>
           <p className='text-center leading-tight'>Add to cart</p>

            </div>

            <h1 className="price font-bold lg:col-start-9 lg:row-start-auto row-start-2 sm:col-start-5 xxs:col-start-6 col-start-7 self-center ">${price}</h1>

            <div className=" xxs:col-start-11 col-start-14    self-center" >
            <FontAwesomeIcon icon={faClose} onClick={()=>handleClose()}  className='hover:shadow-lg'/>
            </div>
            </div>
  )
}

export default Favourite
