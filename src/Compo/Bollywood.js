import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';

function Bollywood() {
    const [dataContext]=useContext(Store);
    console.log(dataContext);

  return (
    <>
    
    </>
  )
}

export default Bollywood;