import { faArrowLeft, faCartShopping, faClose, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import RegularBtn from '../components/RegularBtn'
import Cart from '../components/Cart'
import { NavLink } from 'react-router-dom'
import { CatalogList } from '../Data/CatalogList'


const ShoppingCart = () => {
    const localValues=localStorage.getItem("cart");
    const arrayValues=JSON.parse(localValues);
    
   

  return (
   
    <div className='shadow-lg w-[100%] lg:h-[100vh] h-[100%] flex '>
   
      
    <div className="left sm:px-20 sm:py-20 py-20 px-2 flex flex-col  ">
    <div className="flex lg:flex-row flex-col justify-between p-7">
        <h1 className='font-bold text-[25px]'>Shopping Cart</h1>
        <p>in your bag 4 items</p>
    </div>
    <div className="flex flex-col lg:h-[90%] h-[60%] w-[100%]  overflow-scroll">
        <hr />
        {CatalogList.map((cat)=>{ 
            if(arrayValues.includes(cat.name)){

                return(  <div> <Cart name={cat.name} id={cat.id} image={cat.image} price={cat.price} description={cat.description} /> 
                <hr/>
                </div>); 
            }
           
       
             }
            
            
            )
        
        
        }
    







<hr />

    </div>




    
    
    <div className="lg:hidden flex justify-between pt-5">
<p className=' row-start-2 self-start place-items-start text-lg'>Total cost</p>
<h1 className='font-bold text-2xl'>$14900</h1>

</div>

<div className="lg:hidden flex-col flex gap-7">

<h1>Payment details</h1>
<form action="" className='grid grid-col-2 grid-row-4 gap-2 h-[80%] ' >
    <h1 className='font-bold col-span-2'>Payment Details
    </h1>
    <input type="text" className='col-span-2 w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
    <input type="text"  className='col-span-2 w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1'/>
    <input type="text" className=' w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
    <input type="text" className=' w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
</form>

<button className='bg-myblack text-white p-5 rounded-xl hover:bg-gray-500 hover:shadow-md   transition-all duration-200'>Proceed to checkout</button>

</div>

    
    
    
    
    </div>

    <div className="right w-[50%] lg:grid   md:grid    hidden grid-rows-17 grid-cols-1 px-20 px-5 py-10   bg-gray-100">
    <div className="flex gap-5 items-center  row-span-full self-start place-content-start  ">

<FontAwesomeIcon icon={faSearch}  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
<FontAwesomeIcon icon={faHeart}  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>
<FontAwesomeIcon icon={faCartShopping}  className='fa-1x hover:opacity-80 hover:text-yellow-50'/>


</div>

<div className="flex flex-col">
<p className=' row-start-2 self-start place-items-start'>Total cost</p>
<h1 className='font-bold text-2xl'>$14900</h1>
<p>have a promo code</p>
</div>

<form action="" className='grid grid-col-2 grid-row-4 gap-2 h-[80%] ' >
    <h1 className='font-bold col-span-2'>Payment Details
    </h1>
    <input type="text" className='col-span-2 w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
    <input type="text"  className='col-span-2 w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1'/>
    <input type="text" className=' w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
    <input type="text" className=' w-full bg- bg-transparent outline-none border-2 border-gray-300 text-white p-1' />
</form>



<div className="flex justify-between h-10">



<button className='flex gap-2 uppercase text-[12px] justify-center items-center'>
<NavLink to="/"> <FontAwesomeIcon icon={faArrowLeft} />
Back  </NavLink></button><button className='bg-myblack  px-8 py-2 text-white uppercase text-[7px] hover:bg-gray-400  '>Next Step</button></div>



    </div>



    </div>
  )
}

export default ShoppingCart
