import React from 'react';
import './App.css';
import './'

import { Content } from "./containers"
import { NavBar, Hero } from './components';

function App() {
  // componentDidMount() {
  //   document.title = "Morgan Adkisson"
  // }

  return (
    <div className="App gradient-bg">
        <NavBar />
        <Hero />
        <Content></Content>
        <footer></footer>
    </div>
  );
}

export default App;
