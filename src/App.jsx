import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './components/Flashcard.jsx'


let num = 0;



function App() {

  return (
    <>
      <h1>React Flashcard Review</h1>
      <h3>Test your React Knowledge in a fun way!</h3>
      <p>Number of Questions: 9</p>
      <div className="flashcard-container">
        <Flashcard />
      </div >
    </>
  )
}

export default App
