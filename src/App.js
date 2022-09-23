import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

import './App.css';
import Counter from './components/Counter/Counter';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Counter/>
      <Blog/>
    </div>
  )
}

export default App;