import React, { useState } from 'react'

const Counter = () => {

   const [counter, setCounter] = useState(0);

   // console.log(typeof counter)

   const handleMinus = () => {
      if (counter - 1 >= -3) {
         setCounter(counter - 1);
      }
   }

   const handleReset = () => setCounter(0)

   const handlePlus = () => {
      if (counter + 1 <= 5) {
         setCounter(counter + 1);
      }
   }

   return (
      <div>
         <h1 className="title">{counter} </h1>
         <button onClick={handleMinus}>-1</button>
         <button onClick={handleReset}>Reset</button>
         <button onClick={handlePlus}>+1</button>
      </div>
   )
}

export default Counter