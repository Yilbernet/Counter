import React, { useState } from 'react'
import Counter from './Counter';

const HideShowCounter = () => {

   const [isTrue, setIsTrue] = useState(true);

   const HandleBoolean = () => setIsTrue(!isTrue);

  return (
    <div className='CounterHS'>
      <button onClick={HandleBoolean}>Show/Hide Counter</button>
      {
      isTrue ?
      <Counter />
      :
      <h2>El elemento esta oculto</h2>
      }
    </div>
  )
}

export default HideShowCounter