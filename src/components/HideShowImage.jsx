import React, { useState } from 'react'
import Counter from './Counter';

const HideShowImage = () => {

   const [isTrue, setIsTrue] = useState(true);

   const HandleBoolean = () => setIsTrue(!isTrue);

  return (
    <div>
      <button onClick={HandleBoolean}>Show/Hide Image</button>
      {
      isTrue ?
      <div>
      <img src="https://m.media-amazon.com/images/I/81QWKId4ONL._AC_SX425_.jpg" alt="Pikachu" className="img" />
      </div>
      :
      <h2>El elemento esta oculto</h2>
      }
    </div>
  )
}

export default HideShowImage