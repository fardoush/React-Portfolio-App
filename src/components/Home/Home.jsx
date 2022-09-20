import React from 'react';
import './Home.css';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaGithub } from "react-icons/fa";
import bannerImage from '../../images/banner1.png';


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
      <img src={bannerImage} alt="" />
      <img src={bannerImage} alt="" />

      </div>
    </div>
  )
}

export default Home;