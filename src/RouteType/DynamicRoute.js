import React from 'react';
import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "../Compo/Home";
import Bollywood from "../Compo/Bollywood"
import Hollywood from "../Compo/Hollywood"
import Tech from "../Compo/Tech"
import Food from "../Compo/Food"

const DynamicRoute = () => {
  return (
    <>
    <BrowserRouter>
    <div className='navbar-set'>
  
  
    <NavLink to="/home" >Home</NavLink>
    <NavLink to="/bollywood">Bollywood</NavLink>
    <NavLink to="/hollywood">Hollywood</NavLink>
    <NavLink to="tech">Tech</NavLink>
    <NavLink to="/food">Food</NavLink>
  </div>
  
    <Routes>
      <Route  path='/home' element={<Home />}  />
      <Route path='/bollywood' element={<Bollywood/>} />
      <Route path='/hollywood' element={<Hollywood/>} />
      <Route path='/tech' element={<Tech/>} />
      <Route path='/food' element={<Food/>} />
    </Routes>
   
    </BrowserRouter>  

    
    </>
  )
}

export default DynamicRoute;