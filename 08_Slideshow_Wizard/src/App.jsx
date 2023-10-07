import React, { useEffect, useState } from "react";
import "./styles.scss";
import jobs from "./jobs.json";

const App = () => {

  const [people, setPeople] = useState(jobs);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0) {
      setIndex(lastIndex);
    }
    if(index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">

      {people.map((person, personIndex) => {

        let position = 'nextSlide';

        if(personIndex === index) {
          position = 'activeSlide';
        }

        if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)) {
          position = 'lastSlide';
        }

        const { id, image, name, job, desc } = person;
        return (
          <article className={position}>
            <div className="icon" onClick={() => setIndex(index - 1)}>
              <ion-icon name="chevron-back"></ion-icon>
            </div>
            <div className="content">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <h2>{name}</h2>
              <h3>{job}</h3>
              <p>{desc}</p>
            </div>
            <div className="icon" onClick={() => setIndex(index + 1)}>
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
          </article>
        )
      })}

    </section>
  )
}

export default App;