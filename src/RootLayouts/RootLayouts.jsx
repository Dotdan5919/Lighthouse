import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
   <div>  
<NavBar />
<Outlet/>


</div>

  )
}

export default RootLayouts
