
import React, { useState } from 'react'

const Tour = ({ tour, removeTour }) => {

    const [readMore, setReadMore] = useState(false);
    const { id, name, info, image, price } = tour;

  return (
    <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">$ {price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 210)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
    </article>
  )
}

export default Tour