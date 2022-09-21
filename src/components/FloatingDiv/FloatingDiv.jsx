import React from 'react';
import './FloatingDiv.css';
import {FaReact,FaCode} from "react-icons/fa";

const FloatingDiv = ({tex1,tex2}) => {
  return (
    <div className='floatingDiv'>
      <FaReact className='reactIcon'/>
      <FaCode className='codeIcon'/>
      <span>
        {tex1} 
        <br />
        {tex2}
      </span>
    </div>
  )
}

export default FloatingDiv
