import React, { useContext } from 'react'
import { Store } from '../ContextStore/Storing';

const Food = () => {
  const [dataContext]=useContext(Store);
  console.log(dataContext)
  
  return (
    <>
    
    </>
  )
}

export default Food;