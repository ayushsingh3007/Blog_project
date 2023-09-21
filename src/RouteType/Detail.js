import React, { useContext } from 'react';

import { Store } from '../ContextStore/Storing';

const Details = () => {
   
  const { dataContext } = useContext(Store);



  console.log(dataContext); 
  return(<>
   <h1>i am ayush singh</h1>
 </>

  )
}

export default Details;
