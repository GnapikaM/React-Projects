import React, { useState } from 'react'
import details from './details.json'
import './styles.scss'
import { FaAngleDoubleRight } from 'react-icons/fa';

const App = () => {

  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const currentJob = details[currentJobIndex];

  const nextJob = () => {
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % details.length)
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="job-details">
        <div className="companies">
          {details.map((job, index) => (
            <button key={index}
              onClick={() => setCurrentJobIndex(index)}
              className={index === currentJobIndex ? 'active-btn' : ''}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="experience">
          <h2>{currentJob.category}</h2>
          <h3>{currentJob.company}</h3>
          <div className="job-date">
            {currentJob.jobTime.start} - {currentJob.jobTime.end}
          </div>
          <ul className="job-duties">
            {currentJob.duties.map((duty, index) => (
              <li key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <div className="duty">{duty}</div>
              </li>
            ))}
          </ul>
          <button className='btn' onClick={nextJob}>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default App