import React, { useState } from 'react'
import Paragraphs from "./Paragraphs"
import "./styles.scss"

const App = () => {

  const [generatedParagraphs, setGeneratedParagraphs] = useState([]); 
  const [numParagraphs, setNumParagraphs] = useState(1);

  const handleNumParagraphsChange = (event) => {
    setNumParagraphs(parseInt(event.target.value));
  }

  const handleGenerate = () => {
    setGeneratedParagraphs(Paragraphs.slice(0, numParagraphs));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = numParagraphs;
    if(amount <= 0) {
      amount = 1;
    }
    if(amount > 8) {
      amount = 8;
    }

    setNumParagraphs(amount);

    handleGenerate();
  }

  return (
    <div className="container">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="numParagraphs">Paragraphs: </label>
        <input 
          type='number'
          id='numParagraphs'
          value={numParagraphs}
          onChange={handleNumParagraphsChange}
        />
        <button onClick={handleGenerate}>Generate</button>
      </form>
      <div className="generated-paragraphs">
        {generatedParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>    
    </div>
  )
}

export default App  