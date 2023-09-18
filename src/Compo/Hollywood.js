import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';

function Hollywood() {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  return (
    <>
    
    <div id='container-1-home'>
      {dataContext.filter((item)=>item.id===1).map((item,index)=>{
        return(
          <div id='home-item-1'>
          
          <img src={item.bolly_img} width="105%" height="90%" alt='no there'/>
          <h3>{item.name}</h3>
          {/* <p>{item.story}</p> */}


          </div>
        )
      })}

      {dataContext.filter((item)=>item.id===25).map((item,index)=>{
      return(
        <div id='home-item-2'>
        <img src={item.holly_img} width="60%"height="90%" alt='not there'/>
        <h3>{item.name}</h3>
        {/* <p>{item.story}</p> */}
      
      </div>
      
      )
      })}
         
          {dataContext.filter((item)=>item.id===31).map((item,index)=>{
            return(
              <div id='home-item-3'>

              <img src={item.tech_img} width="60%" height="90%" alt='not there'/>
              <h3>{item.name}</h3>
              {/* <p>{item.story}</p> */}
              
              </div>
            )
          })}
</div>
<h3 id='the-latest'>The Latest</h3>
<div id='latest-home'>
 
  <div id='latest-item'>
    {dataContext.filter((item)=>item.id===7).map((item,index)=>{
      return(
        <>
       
        <img src={item.bolly_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })} 
</div>
<div id='latest-item'>
{dataContext.filter((item)=>item.id===6).map((item,index)=>{
      return(
        <>
        
        <img src={item.bolly_img} alt='not there' width="100%"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
        </>
      )
    })}
    </div>

    <div id='latest-item'>

    {dataContext.filter((item)=>item.id===8).map((item,index)=>{
      return(
      
    <>
        <img src={item.bolly_img} alt='not there' width="100%" height="200rem"/>
        <h4>{item.name}</h4>
        <p>{item.story}</p>
      </>  
      )
    })} 
    </div>
</div>

<h3 id='top-stories'>Top Stories</h3>
<div id='bottom-homepage'>

</div>

    
    </>
  )
}

export default Hollywood;