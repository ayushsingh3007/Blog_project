import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../ContextStore/Storing';

const Details = () => {
  const  id  = useParams().id; 
  const { dataContext } = useContext(Store);



  console.log(dataContext); 
  return(<>
 {dataContext.filter((data)=>data.id===parseInt(id)).map((item,index)=>{
    return(<>
        <h1>{item.name}</h1>
        <img src={item.cat} alt='not found'/>
        
        </>)
 })};

 </>

  )
}

export default Details;
