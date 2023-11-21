import React from 'react'
import eventBus from '../eventBus';

const Buybtn = ({name}) => {

  // localStorage.clear();
    // add to cart list
const handleClick=()=>{
    




  const cart=localStorage.getItem("cart"); 
  const cartNum=localStorage.getItem("cartNum"); 



  
  if(cart && cartNum)
  { 
      //call for the cart
  const newVal=JSON.parse(cart); 
  const newValNum=JSON.parse(cartNum);  //convert  json
   //convert  json
  if(!newVal.includes(name)){
    newVal.push(name);
    newValNum.push(1);

// do nothing
  }
  else{
   
    newVal.splice(newVal.indexOf(name),1);
    newValNum.splice(newVal.indexOf(name),1);


  }

  
  localStorage.setItem('cart', JSON.stringify(newVal));
  localStorage.setItem('cartNum', JSON.stringify(newValNum));
  

  eventBus.dispatch("cartAdded");


}

     


  else  {

    let Cart=[name];
    let CartNum=[1];              //initiating Cart array for storing Cart values
                  //initiating Cart array for storing Cart values

    let stringfyCart=JSON.stringify(Cart);
    let stringfyCartNum=JSON.stringify(CartNum);




    localStorage.setItem("cart",stringfyCart);
    localStorage.setItem("cartNum",stringfyCartNum);


  



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
