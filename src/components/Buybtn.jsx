import React from 'react'

const Buybtn = ({name}) => {
    // add to favourite list
const handleClick=()=>{
    
  const cart=localStorage.getItem("cart");  //call for the favourite 
  const newVal=JSON.parse(cart);  //convert  json
  if(newVal.find((newV)=>{return newV===name})){

// do nothing
  }
  else{
    newVal.push(name);
  }

  
  localStorage.setItem('cart', JSON.stringify(newVal));
  console.log(localStorage.getItem("cart"));

};


  return (
    <button className="bg-myblack  px-10 py-2 text-white uppercase text-[11px] hover:bg-gray-400 " onClick={handleClick}> Buy</button>
  )
}

export default Buybtn
