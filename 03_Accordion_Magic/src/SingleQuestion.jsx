import React, { useState } from 'react'

const singleQuestion = ({ id, question, answer }) => {

  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="questions">
      <div className="question">
        <h3>{question}</h3>
        <ion-icon 
          name={showAnswer ? "remove-circle" : "add-circle"}
          onClick={toggleAnswer}
        >
        </ion-icon>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  )
}

export default singleQuestion