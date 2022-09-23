import React from 'react';
import './Card.css';


const Card = ({serviceIcon,heading,details}) => {
  return (
    <div className='card'>
    {/* <img src="" alt="" /> */}
    <h2>{serviceIcon}</h2>
      <h4>{heading}</h4>
      <p>{details}</p>
    <button className=" btn learn-btn">Learn More...</button>
    </div>
  )
}

export default Card;
