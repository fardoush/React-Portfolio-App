import React from 'react';
import './Home.css';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaGithub } from "react-icons/fa";
import bannerImage from '../../images/banner1.png';
import Shape1 from '../../images/shape1.png';
import Shape2 from '../../images/shape2.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';



const Home = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-content-inner">
      <h1 className="name">Hi...! I'm 
      <br />
      <span>Jahanara Fardoush</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem inventore, laboriosam veritatis voluptatibus quam aspernatur officiis aut ex vitae consequuntur.</p>

      <button className="home-btn btn">HIre Me</button>

      <div className="social-icon">
        <a href="#gh" className=""> 
        <FaFacebookF/>
         </a>
         <a href="#gh" className=""> 
        <FaInstagram/>
         </a>
         <a href="#ghj" className=""> 
        <FaLinkedinIn/>
         </a>
         <a href="#ghh" className=""> 
        <FaTwitter/>
         </a>
         <a href="#" className=""> 
        <FaGithub/>
         </a>
      </div>
      </div>
      <div className="banner-images">
      <span className='shape1'></span>
      {/* <img src={Shape1} alt="" />
      <img src={Shape2} alt="" /> */}
    <div className="banner-img">
    <img src={bannerImage} alt="" />
    </div>
    {/* <FloatingDiv  tex1='Web' tex2='Developer'/> */}
      </div>
    </div>
  )
}

export default Home;