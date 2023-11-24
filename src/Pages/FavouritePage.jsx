import { faArrowLeft, faCartShopping, faClose, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import RegularBtn from '../components/RegularBtn'
import Favourite from '../components/Favourite'
import { NavLink } from 'react-router-dom'
import { CatalogList } from '../Data/CatalogList'

const FavouritePage = () => {
    const localValues=localStorage.getItem("favourite");
    const arrayValues=JSON.parse(localValues);

    const[newArray,setNewArray]=useState(arrayValues);
    
    
    useEffect(
()=>
{



    
}



    )
   

  return (
   
    <div className='shadow-lg w-[100%] lg:h-[100vh] h-[100%] flex '>
   
      
    <div className="left sm:px-20 sm:py-20 py-20 px-2 flex flex-col  ">
    <div className="flex lg:flex-row flex-col justify-between p-7">
        <h1 className='font-bold text-[25px]'>Favourite</h1>
        
    </div>
    <div className="flex flex-col lg:h-[100%] h-[100%] w-[100%]  overflow-scroll">
        <hr />
        {CatalogList.map((cat)=>{ 
            if(newArray.includes(cat.name)){

                return(  <div> <Favourite name={cat.name} id={cat.id} image={cat.image} price={cat.price} changeArray={click=>setNewArray(click)} description={cat.description} /> 
                <hr/>
                </div>);  }
            }
) 
          
              
    
    }
        
        
    


{  newArray.length<1?
    (
        
        <div className="item lg:grid grid grid-cols-10 lg:grid-rows-none grid-rows-1   lg:grid-cols-11   p-7 lg:gap-20 ">
        <h1 className="w-40"> 
       No Favourite
        </h1>
        </div>
        


    )
:" " }





<hr />

    </div>




    
    
  

    
    
    
    
    </div>

  



    </div>
  )

}

export default FavouritePage
