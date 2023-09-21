import React, { useContext, useState } from 'react'
import { Store } from '../ContextStore/Storing';
import "./Style/Style.css"
import { Link } from 'react-router-dom';
const Food = () => {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  const [selectedItem, setSelectedItem] =useState();
   console.log(selectedItem)
  const handleItemClick = (item) => {
    setSelectedItem(item);
  }
  
  return (
    <>
     
<h3 id='the-latest'>The Latest</h3>
<div id='latest-home'>
 
  <div id='latest-item'>
    {dataContext.filter((item)=>item.id===49).map((item,index)=>{
      return(
        <div key={index}>
         <Link to={`/details/${item.id}`}>
        <img src={item.Food_img} alt='not there' id='thelatest-img'/>
        <h4 onClick={() => handleItemClick(item)}>{item.name}</h4> </Link>
        <p>{item.story.slice(0,159)}....</p>
        </div>
      )
    })} 
</div>
<div id='latest-item'>
{dataContext.filter((item)=>item.id===50).map((item,index)=>{
      return(
        <>
        
        <img src={item.Food_img} alt='not there' id='thelatest-img'/>
        <h4>{item.name}</h4>
        <p>{item.story.slice(0,159)}....</p>
        </>
      )
    })}
    </div>

    <div id='latest-item'>

    {dataContext.filter((item)=>item.id===51).map((item,index)=>{
      return(
      
    <>
        <img src={item.Food_img} alt='not there' id='thelatest-img'/>
        <h4>{item.name}</h4>
        <p>{item.story.slice(0,159)}..........</p>
      </>  
      )
    })} 
    </div>
</div>

<h3 id='top-stories'>Top Stories</h3>
<div id='bottom-homepage'>
<div id='bottom-item'>
{dataContext.filter((item)=>item.id===52).map((item,index)=>{
  return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img' />
    <h3>{item.name}</h3>
    <p>{item.story.slice(0,159)}..........</p>
    
    </>
    
  )
  
})}
</div>
<div id="bottom-item">
{dataContext.filter((item)=>item.id===53).map((item,index)=>{
  return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    <p>{item.story.slice(0,159)}..........</p>
    
    </>
    
  )
  
})}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===46).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===60).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===56).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===48).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>

<div id='bottom-item'>
  {dataContext.filter((item)=>item.id===47).map((item,index)=>{
    return(
    <>
    <img src={item.Food_img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>














</div>


<h3 id='top-post'>Top Posts</h3>
<div id='bottom-right'>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===60).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found'  id='img-right-bottom'/>
      <h3>{item.name}</h3>
      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===47).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found' id='img-right-bottom'/>
      <h3>{item.name}</h3>
      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number-2' >2</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1">
    {dataContext.filter((item)=>item.id===49).map((item,index)=>{
      return(
      <>
      <img src={item.Food_img} alt='not found'  id='img-right-bottom'/>
      <h3>{item.name}</h3>
      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number-3' >3</h1>

      </>
)    })}
   </div>




</div>

<div id="advertise"><h1>Advertisement</h1></div>

      
<div id='footer'>
  <div id='footer-item'>
    <h3>Contact Us</h3>
    <h4>Address:viajy nagar prayagraj </h4>
    <p>Phone:0532-2678</p>
    <p>support@134</p>

  </div>
  <div id='footer-item'>
    <h3>Our Mission</h3>
    <p>We are non profit association provided a good quality of education and give the correct direction to your carrer.....</p>
  </div>
  <div id='footer-item'>
  <h3>SUPPORT</h3>
    <h3>FAQ</h3>
    <h3>Contact📞☎
    </h3>
  </div>
</div>

    
    </>
  )
}

export default Food;
