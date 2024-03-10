import { useState } from 'react'
import React from 'react';
import '/src/index.css';

// Have a different card for Question and one for Answer.

let infoList = [["What does onClick() help the developer do?", "Run code when an element is clicked on."],
["Is React a framework?", "No. It's a library."],
["Who invented React?", "Engineers at Facebook"],
["What is useState()?", "A hook that allows adding of a state variable to a component."],
["what's a React hook?", "A hook allows you to play with different React features of components."],
["Command to create a project with latest Vite version", "npm create vite@latest"],
["Difference between Javascript and Typescript", "Typescript is a superset of Javascript. Introduces types into JS."],
["When was React created?", "May 29, 2013"],
["What's a .jsx file?", "Javascript XML. Write JS and HTML in same file."]
]
let numberOfQuestions = infoList.length;
console.log(numberOfQuestions)

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestionOrAnswer(QorA) {
    if (QorA == 0) {
        return <h4>Question: </h4>
    } else {
        return <h4>Answer: </h4>
    }
}


const Flashcard = () => {
    const [count, setCount] = useState(0);
    const [questionNum, setNum] = useState(0);

    return (
        <>
            <div className="clickableBox" onClick={() => setCount((count) => count == 0 ? 1 : 0)}>
                {getQuestionOrAnswer(count)}
                <p>{infoList[questionNum][count]}</p>
            </div>
            <div className="button-container">
                <button onClick={() => setNum((questionNum) => questionNum = getRandomNumber(0, numberOfQuestions))}>Change question</button>
            </div>
        </>
    );
}

export default Flashcard;

// 