import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';
import "./Style1/Style1.css"
import { Link } from 'react-router-dom';
function Home() {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  return (
    <>
     <div id='top-img-container'>
       <div id='top-img-1'></div>
       <div id='top-img-2'></div>
       <div id='top-img-3'></div>
     </div>
    
         
<h3 id='the-latest-page'>The Latest</h3>
<div id='latest-home-page'>
 
  <div id='latest-item-page'>
    {dataContext.filter((item)=>item.id===16).map((item,index)=>{
      return(
        <>
       <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
        <img src={item.img} alt='not there' id='thelatest-img'/>
        <h4>{item.name}</h4>
        </Link>
        <p>{item.story.slice(0,159)}....</p>
        </>
      )
    })} 
</div>
<div id='latest-item-page'>
{dataContext.filter((item)=>item.id===17).map((item,index)=>{
      return(
        <>
        <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
        <img src={item.img} alt='not there' id='thelatest-img'/>
        <h4>{item.name}</h4>
        </Link>
        <p>{item.story.slice(0,159)}....</p>
        </>
      )
    })}
    </div>

    <div id='latest-item-page'>

    {dataContext.filter((item)=>item.id===18).map((item,index)=>{
      return(
      
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
        <img src={item.img} alt='not there' id='thelatest-img'/>
        <h4>{item.name}</h4>
        </Link>
        <p>{item.story.slice(0,159)}..........</p>
      </>  
      )
    })} 
    </div>
</div>

<h3 id='top-stories-page'>Top Stories</h3>
<div id='bottom-homepage-page'>
<div id='bottom-item-page'>
{dataContext.filter((item)=>item.id===19).map((item,index)=>{
  return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img' />
    <h3>{item.name}</h3>
    </Link>
    <p>{item.story.slice(0,159)}..........</p>
    
    </>
    
  )
  
})}
</div>
<div id="bottom-item-page">
{dataContext.filter((item)=>item.id===20).map((item,index)=>{
  return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img'/>
   
    <h3>{item.name}</h3>
    </Link>
    <p>{item.story.slice(0,159)}..........</p>
    
    </>
    
  )
  
})}
</div>

<div id='bottom-item-page'>
  {dataContext.filter((item)=>item.id===21).map((item,index)=>{
    return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    </Link>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item-page'>
  {dataContext.filter((item)=>item.id===22).map((item,index)=>{
    return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    </Link>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item-page'>
  {dataContext.filter((item)=>item.id===23).map((item,index)=>{
    return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    </Link>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>
<div id='bottom-item-page'>
  {dataContext.filter((item)=>item.id===24).map((item,index)=>{
    return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>

    <img src={item.img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    </Link>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>

<div id='bottom-item-page'>
  {dataContext.filter((item)=>item.id===25).map((item,index)=>{
    return(
    <>
    <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
    <img src={item.img} alt='not there'  id='bottom-img'/>
    <h3>{item.name}</h3>
    </Link>
    <span>{item.story.slice(0,159)}..........</span>
    
    </>)
  })}
</div>














</div>


<h3 id='top-post-page'>Top Posts</h3>
<div id='bottom-right-page'>
   <div id="rigth-bottom-item-1-page">
    {dataContext.filter((item)=>item.id===26).map((item,index)=>{
      return(
      <><Link to={`/details/${item.id}/${item.cat}`}  id='link'>

      <img src={item.img} alt='not found'  id='img-right-bottom-page'/>
      <h3>{item.name}</h3>
      </Link>

      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number' >1</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1-page">
    {dataContext.filter((item)=>item.id===27).map((item,index)=>{
      return(
      <>
      <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
      <img src={item.img} alt='not found' id='img-right-bottom-page'/>
      <h3>{item.name}</h3>
      </Link>
      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number-2' >2</h1>

      </>
)    })}
   </div>
   <div id="rigth-bottom-item-1-page">
    {dataContext.filter((item)=>item.id===28).map((item,index)=>{
      return(
      <>
      <Link to={`/details/${item.id}/${item.cat}`}  id='link'>
      <img src={item.img} alt='not found'  id='img-right-bottom-page'/>
      <h3>{item.name}</h3>
      </Link>

      <p>{item.story.slice(0,90)}.....</p>
      <h1 id='number-3' >3</h1>

      </>
)    })}
   </div>




</div>

<div id="advertise-page"><h1>Advertisement</h1></div>


           
<div id='footer-page'>
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

export default Home;
