import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './components/Flashcard.jsx'

const firstFlashCards = [
  ["What method adds state to functional components?", "useState"],
  ["React primarily is a?", "Library"],
  ["A piece of React's state should be updated using?", "setState"],
  ["What JSX stands for?", "JavaScript XML"],
  ["Event handler for user clicks in React?", "onClick"],
  ["React's programming paradigm is?", "Declarative"],
  ["What command initializes a new React app?", "create-react-app"],
  ["Keyword to create a constant in JavaScript?", "const"],
  ["Method to render list in React?", "map"],
  ["What does 'props' stand for?", "Properties"],
  ["True or False: In React, state updates are synchronous.", "False"],
  ["Function to prevent default behavior in forms?", "preventDefault"],
  ["What should be unique among siblings in a list?", "Key"],
  ["A React app's root DOM node is found in?", "index.html"],
  ["True or False: React components must return a single root element.", "True"],
  ["Hook to manage local state in a component?", "useState"],
  ["Where do you import React components from?", "react"],
  ["How do you display JavaScript variables in JSX?", "{}"],
  ["Can a component return multiple elements?", "Fragments"],
  ["What property is used to pass data into a component?", "Props"]
];

function App() {

  // need to set user answer to response in form.
  // compare user answer to answer in Flashcard, need to import info here somehow
  // update flashcard streak if right, change css or send alert.
  // update useStreak at top


  return (
    <>
      <h1>React Flashcard Review</h1>
      <h3>Test your React Knowledge in a fun way!</h3>
      <div className="flashcard-container">
        <Flashcard firstFlashCards={firstFlashCards} />
      </div >
    </>
  )
}

export default App
