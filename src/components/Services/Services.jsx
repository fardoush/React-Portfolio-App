import React from 'react';
import './Services.css';
import '../../components/Card/Card';
import Card from '../../components/Card/Card';
import Resume from './Jahanara_Fardoush.pdf';

const Services = () => {
  return (
    <div className='services-wrapper'>
      <div className="services-content">
        <h2>My Awesome</h2>
        <h2><span>Services</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit animi quis maxime sint nesciunt ducimus voluptas repellendus?</p>

        <a href={Resume} download  className="downloadCv">
            <button className="btn cv-btn">
                Download CV
            </button>
        </a>
        <div className="services-blur1"></div>  
      </div>

      <div className="services-main-content-inner">
      <div className='serviceCardInner'>

      <div className="card-inner"style={{
left:"-4rem"}}>
      <Card 
          serviceIcon ={"icon"}
          heading = {"Heading1"}
          details ={"design,XD,Photoshop,Creative Design"}
          />
      </div>
       
     

    <div className="card-inner" style={{top:"-7rem",
left:"-25rem"}}>
    <Card
          serviceIcon ={"icon2"}
          heading = {"Heading2"}
          details ={"design,XD,Photoshop,Creative Design"}
          />
    </div>
      
     <div className="card-inner" style={{bottom:"15rem",
left:"-4rem"}}>
     <Card
          serviceIcon ={"icon3"}
          heading = {"Heading3"}
          details ={"design,XD,Photoshop,Creative Design"}
          />

     </div>
    
      </div>

      <div className="services-blur2"></div>  

      </div>
    </div>
  )
}

export default Services;
