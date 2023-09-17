import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';

function Tech() {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  return (
    <>

    
    
    </>
  )
}

export default Tech;