import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
    </div>
  )
}

export default App;