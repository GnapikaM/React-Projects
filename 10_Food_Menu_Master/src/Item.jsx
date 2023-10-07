import React from 'react'

const Item = ({ id, category, image, item, info, price, rating }) => {

  return (
    <div className="item">
        <div className="image">
            <img src={image} alt={item} />
            <div className="rating">
                <h5>{rating}</h5>
                <ion-icon name="star"></ion-icon>
            </div>
        </div>
        <div className="info">
            <div className="name">
                <h3>{item}</h3>
                <h4 className="price">{price}</h4>
            </div>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default Item