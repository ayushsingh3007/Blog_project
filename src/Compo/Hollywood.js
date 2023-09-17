import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';

function Hollywood() {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  return (
    <>
    
    
    
    </>
  )
}

export default Hollywood;