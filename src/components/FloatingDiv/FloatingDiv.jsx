import React from 'react';
import './FloatingDiv.css';
import {FaReact } from "react-icons/fa";

const FloatingDiv = ({icon,tex1,tex2}) => {
  return (
    <div className='floatingDiv'>
      {/* <img src="" alt="" /> */}
      <FaReact className='reactIcon'/>
      <span>
        {tex1} 
        <br />
        {tex2}
      </span>
    </div>
  )
}

export default FloatingDiv
