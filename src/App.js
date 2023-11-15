//css
import './App.css';

// hooks
import { useState } from 'react';

import NavBar from './components/NavBar';

//pages
import Homepage from './Pages/Homepage';
import ShoppingCart from './Pages/ShoppingCart';

//other assets
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import RootLayouts from './RootLayouts/RootLayouts';


const router= createBrowserRouter(

  createRoutesFromElements (
    <Route path='/' element={<RootLayouts/>}>
    

<Route path='/' index  element={<Homepage/>}/>

<Route path=':id'  element={<Homepage/>}/>


<Route path='shoppingCart'  element={<ShoppingCart/>}/>


</Route>


  )



)


function App() {

  let Cart=[];
  let Favourite=[];

  let stringfyCart=JSON.stringify(Cart);
  let stringfyFav=JSON.stringify(Favourite);

   localStorage.setItem("cart",stringfyCart);
   localStorage.setItem("favourite",stringfyFav);


  //  const val= JSON.parse(localStorage.getItem("cart"));
  //  console.log()

  

  return (
    
    <div>
    
<RouterProvider router={router} />
</div>
    
  );
}

export default App;
