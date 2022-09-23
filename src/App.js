import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Counter/>
    </div>
  )
}

export default App;