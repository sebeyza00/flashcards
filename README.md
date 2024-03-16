# WEB102: React Knowledge Flashcards Pt 2.

Continuing on the Flashcards Project.

New functionality added:
- User can type in answer and see if they got it right. THis will change the CSS of the submit box form to green or red.
- User has an answer streak that adds 1 everytime they get the right answer and resets back to 0 when answer is incorrect.
- User can look at previous and next cards
- User can shuffle cards with Shuffle button.


Previous functionality:
- Created a Flashcard component with a box and button. The box is clickable and changes from question to answer. The button changes the question.
- Two useState() variables are used. Count is used to switch from question to answer and questionNum is used to switch to another question.
- questionNum takes the value of a random number from 0 to the length of questionsList. Updated everytime the button is clicked.
- count takes a value of either 0 or 1. If box is clicked, this value is switched with a ternary operation.



<!-- https://github.com/sebeyza00/flashcards/assets/111407050/de92a057-90c7-4235-aa61-9661d9e4bf12 -->

https://imgur.com/a/KNhoZ8a.gif

