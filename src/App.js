import React, { Component } from 'react';
import logo from './logo.svg';
import About from './Components/About';
import Projects from './Components/Projects';
import './App.css';
require('dotenv').config();


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Colin Groark</h1>
            <h2>Web Developer</h2>
          </div>
          <div>
          <p>built with <img src={logo} className="App-logo" alt="logo" /></p>
          </div>
        </header>
        <main>
          <article id='about'>
            <About />
          </article>
          <article id='projects'>
            <Projects />
          </article>
        </main>
      </div>
    );
  }
}

export default App;
