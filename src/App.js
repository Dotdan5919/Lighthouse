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
    

<Route path='/' index element={<Homepage/>}/>
<Route path='shoppingCart'  element={<ShoppingCart/>}/>


</Route>


  )



)


function App() {

  

  return (
    
    <div>
    
<RouterProvider router={router} />
</div>
    
  );
}

export default App;
