import React from 'react'
import eventBus from '../eventBus';

const Buybtn = ({name}) => {
 

    // add to cart list
const handleClick=()=>{
    




  const cart=localStorage.getItem("cart"); 
  console.log(cart);
  const cartNumber=localStorage.getItem("cartNumber");
  
  if(cart && cartNumber)
  { 
      //call for the favourite 
  const newVal=JSON.parse(cart);  //convert  json
  const newCartNum=JSON.parse(cartNumber);
  if(!newVal.includes(name)){
    newVal.push(name);
    newCartNum.push(1);
// do nothing
  }
  else{
   
    newVal.splice(newVal.indexOf(name),1);
    newCartNum.splice(newCartNum.indexOf(1),1);

  }

  
  localStorage.setItem('cart', JSON.stringify(newVal));
  eventBus.dispatch("cartAdded");


}

     


  else  {

    let Cart=[name];              //initiating Cart array for storing Cart values

    let stringfyCart=JSON.stringify(Cart);



    localStorage.setItem("cart",stringfyCart);


//     const cart=localStorage.getItem("cart"); 

//      //call for the favourite 
//   const newVal=JSON.parse(cart);  //convert  json
//   if(!newVal.includes(name)){
//     newVal.push(name);
// // do nothing
//   }
//   else{
   
//     newVal.splice(newVal.indexOf(name),1);

//   }

  
//   localStorage.setItem('cart', JSON.stringify(newVal));
  eventBus.dispatch("cartAdded");
  console.log(localStorage.getItem("cart"));

}

  }








  return (
    <button className="bg-myblack  px-10 py-2 text-white uppercase text-[11px] hover:bg-gray-400 " onClick={handleClick}> Buy</button>
  )
}

export default Buybtn
