import { useState } from 'react'
import './styles/index.css'
import Counter from './components/Counter'
import HideShowImage from './components/HideShowImage';
import HideShowCounter from './components/HideShowCounter';

function App() {

  return (
    <div className="App">
      <HideShowCounter />
      <HideShowImage />
    </div>
  )
}

export default App
