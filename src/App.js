import React from 'react';
import './App.css';
import './'

import { Content } from "./containers"
import { NavBar, Hero } from './components';

function App() {
  return (
    <div className="App gradient-bg">
        <NavBar />
        <Hero />
        <Content></Content>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
