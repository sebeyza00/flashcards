import { useState, useEffect } from 'react';
import React from 'react';
import '/src/index.css';

// Have a different card for Question and one for Answer.


const Flashcard = (props) => {
    const [count, setCount] = useState(0);
    const [questionNum, setNum] = useState(0);
    const [flashcards, setFlashcards] = useState(props.firstFlashCards);
    let numOfQuestions = flashcards.length;
    console.log(flashcards);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) { // Fisher Yates shuffle algo
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // switching values in one line.
        }
        return shuffledArray;
    };

    const shuffleFlashCards = () => {
        setFlashcards(shuffleArray(flashcards));
        setNum(0); // reset to first question.
    }

    function getQuestionOrAnswer(QorA) {
        if (QorA == 0) {
            return <h4>Question: </h4>
        } else {
            return <h4>Answer: </h4>
        }
    }

    // Comparing User Answers to Data

    const [userData, setUserData] = useState('Enter answer here');
    const [userStreak, setUserStreak] = useState(0);
    const [answerStatus, setAnswerStatus] = useState('');

    const compareUserAnswer = (event) => {
        event.preventDefault();
        let userAnswer = event.target.userGuess.value;
        setUserData(userAnswer);

        if (userAnswer == flashcards[questionNum][1]) {
            console.log("Correct!")
            setUserStreak(userStreak + 1)
            setAnswerStatus('correct');

        } else {
            console.log("Incorrect!")
            setUserStreak(0);
            setAnswerStatus('incorrect');
        }

    };


    return (
        <>
            <p>Total questions: {numOfQuestions}</p>
            <p>User Streak: {userStreak}</p>
            <div className="clickableBox" onClick={() => setCount((count) => count == 0 ? 1 : 0)}>
                {getQuestionOrAnswer(count)}
                <p>{flashcards[questionNum][count]}</p>
            </div>
            <div className="direction-buttons-container">
                <div className="button-container">
                    <button onClick={() => setNum((questionNum) => (questionNum - 1 + flashcards.length) % flashcards.length)}>Prev</button>
                </div>
                <div className="button-container">
                    <button onClick={() => setNum((questionNum) => (questionNum + 1) % flashcards.length)}>Next</button>
                </div>

            </div>


            <div className="button-container">
                <button onClick={shuffleFlashCards}>Shuffle</button>
            </div>

            <form onSubmit={compareUserAnswer}>
                <input type="text" name="userGuess" className={answerStatus}></input>
                <button type="submit">Submit answer</button>
            </form>

        </>
    );
}

export default Flashcard;