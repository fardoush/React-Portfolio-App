import React from 'react';
import './Services.css';


const Services = () => {
  return (
    <div className='services-wrapper'>
      <div className="services-content">
        <h2>My Awesome</h2>
        <h2><span>Services</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit animi quis maxime sint nesciunt ducimus voluptas repellendus?</p>

        <div className="downloadCv">
            <button className="btn cv-btn">
                Download CV
            </button>
        </div>
        <div className="services-blur1"></div>  
      </div>

      <div className="services-main-content-inner">

      </div>
    </div>
  )
}

export default Services;
