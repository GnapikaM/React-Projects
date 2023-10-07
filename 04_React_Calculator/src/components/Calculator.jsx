import React, { useState } from 'react'

const Calculator = () => {

    const [prevInput, setPrevInput] = useState("");
    const [input, setInput] = useState("");

    const handleInput = (value) => {
        setInput((prevInput) => `${prevInput}${value}`);
    }

    const handleClear = () => {
        setInput("");
        setPrevInput("");
    }

    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    }

    const handleEquals = () => {
        try {
            setPrevInput(input);
            setInput(eval(input));
        }
        catch(error) {
            setInput("Error");
        }
    }

  return (
    <div className="calculator-grid">
        <div className="output">
            <input 
                type="text" 
                className='previous-output'
                value={prevInput}
                readOnly
            />
            <input 
                type="text" 
                className='current-output'
                value={input}
                readOnly
            />
        </div>
        <button className='span-two' onClick={handleClear}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button className='span-two' onClick={handleEquals}>=</button>
    </div>
  )
}

export default Calculator