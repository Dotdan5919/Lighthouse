
import React from 'react'
import Buybtn from './Buybtn'
import Favouritebtn from './Favouritebtn'

const CatlogCard = (props) => {
  return (
    <div className='shadow-xl hover:shadow-2xl xl:h-60 h-96 gap-1 flex xl:flex-row flex-col items-center justify-center'>
      
    <div className="flex xl:w-[700px] w-full h-full bg-slate-500 overflow-hidden">
    <img src={props.source} alt="" className='w-full h-full object-cover' /></div>

    <div className="flex flex-col gap-7 xl:w-[68%] p-10">
    <div className="flex flex-col gap-7">  
        <h1 className='font-bold text-[15px]'>{props.name}</h1>
        <p className='text-[10px]'>{props.description}</p> </div>
        <div className='flex  gap-4 items-center h-10 justify-between'>
        <h1 className='font-bold'>${props.price}</h1>
        <Buybtn name={props.name}   />
        <Favouritebtn name={props.name}/>

        </div>
    </div>


    
    </div>
  )
}

export default CatlogCard
