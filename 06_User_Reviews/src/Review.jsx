import React, { useState } from 'react'
import reviewJSON from "./reviews.json"

const Review = () => {

    const [index, setIndex] = useState(0);
    const { image, name, role, review } = reviewJSON[index];

    const checkNumber = (number) => {
        if(number < 0) {
            return reviewJSON.length - 1;
        }
        if(number > reviewJSON.length - 1) {
            return 0;
        }
        return number;
    }
    
    const previousReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const randomReview = () => {
        const randomNumber = Math.floor(Math.random() * reviewJSON.length);
        setIndex(randomNumber);
    }

  return (
    <div className="container">
        <div className="review-card">
            <div className="image">
                <img src={image} alt={name} />
                <div className="quote-icon">
                    <img src="src/assets/quotation.png" alt="" />
                </div>
            </div>
            <h2 className='name'>{name}</h2>
            <h4 className="role">{role}</h4>
            <p className="review">{review}</p>
            <div className="arrows">
                <div className="previous-btn" onClick={previousReview}>
                    <ion-icon name="chevron-back-circle"></ion-icon>
                </div>
                <div className="next-btn" onClick={nextReview}>
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            <div className="random-btn" onClick={randomReview}>
                <button className='surprise-btn'>Surprise Me</button>
            </div>
        </div>
    </div>
  )
}

export default Review