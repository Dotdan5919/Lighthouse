import React from 'react'
import eventBus from '../eventBus';

const Buybtn = ({name}) => {
    // add to favourite list
const handleClick=()=>{
    
  const cart=localStorage.getItem("cart");  //call for the favourite 
  const newVal=JSON.parse(cart);  //convert  json
  if(!newVal.includes(name)){
    newVal.push(name);
// do nothing
  }
  else{
   
    newVal.splice(newVal.indexOf(name),1);

  }

  
  localStorage.setItem('cart', JSON.stringify(newVal));
  eventBus.dispatch("cartAdded");
  console.log(localStorage.getItem("cart"));

};






  return (
    <button className="bg-myblack  px-10 py-2 text-white uppercase text-[11px] hover:bg-gray-400 " onClick={handleClick}> Buy</button>
  )
}

export default Buybtn
