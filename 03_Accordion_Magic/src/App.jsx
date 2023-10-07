import React, { useState } from 'react'
import "./index.scss"
import questionsJSON from "./questions.json";
import SingleQuestion from './singleQuestion';

const App = () => {

  const [questions, setQuestions] = useState(questionsJSON);

  return (
    <div className="container">
      <div className="accordian">
        <h1>Questions</h1>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} question={question.question} answer={question.answer} />
          })}

          {/* {questions.map((question) => (
            <SingleQuestion key={question.id} question={question.question} answer={question.answer} />
          ))} */}
        </section>
      </div>
    </div>
  )
}

export default App