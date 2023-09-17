import React from 'react';
import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "../Compo/Home";
import Bollywood from "../Compo/Bollywood"
import Hollywood from "../Compo/Hollywood"
import Tech from "../Compo/Tech"
import Food from "../Compo/Food"
import Fitness from '../Compo/Fitness';
import { Storing } from '../ContextStore/Storing';

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
    <NavLink to="/fitness">Fitness</NavLink>
  </div>
  <Storing>
    <Routes>
      <Route  path='/home' element={<Home />}  />
      <Route path='/bollywood' element={<Bollywood/>} />
      <Route path='/hollywood' element={<Hollywood/>} />
      <Route path='/tech' element={<Tech/>} />
      <Route path='/food' element={<Food/>} />
      <Route path='/fitness' element={<Fitness/>}/>
    </Routes>
              </Storing>
    </BrowserRouter>  
     
    
     
    



    

    </>
  )
}

export default DynamicRoute;