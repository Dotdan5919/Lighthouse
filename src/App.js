//css
import './App.css';

// hooks
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';

//pages
import Homepage from './Pages/Homepage';
import ShoppingCart from './Pages/ShoppingCart';

//other assets
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import RootLayouts from './RootLayouts/RootLayouts';
import NoPage from './Pages/NoPage';
import FavouritePage from './Pages/FavouritePage';
import LoginRegisterPage from './Pages/LoginRegisterPage';


// this is to link to the navbar layout
const router= createBrowserRouter(

  createRoutesFromElements (
    <Route path='/' element={<RootLayouts/>}>
    

<Route path='/' index  element={<Homepage/>}/>
<Route path='/favourite' index  element={ <FavouritePage/> }/>





<Route path='shoppingCart'  element={<ShoppingCart/>}/>
<Route path=':id'  element={<Homepage/>}/>
<Route path='catalog/:id'  element={<Homepage section={"catalog"}/>}/>

<Route path='*'  element={<NoPage/>   }/>
<Route path='login'  element={<LoginRegisterPage/>   }/>




</Route>


  )



)


function App() {


  useEffect(()=>{

    const test=[];

if(localStorage.getItem("cart")){


}
else{ 
    localStorage.setItem("cart",JSON.stringify(test));
localStorage.setItem("favourite",JSON.stringify(test));
localStorage.setItem("cartNum",JSON.stringify(test));
}


  },[])
 
   


  return (
    
    <div>
    
<RouterProvider router={router} />
</div>
    
  );
}

export default App;
