import React, { Component } from 'react';
import logo from './logo.svg';
import WeatherSearch from './Components/WeatherSearch';
import Parks from './Components/Parks'
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
            <div className="row">
              <div className="col-md-8">
                <h1>About</h1>
                <p>I'm a full-stack web developer with experience building websites and untangling problems and developing efficient systems and tools in the private and non-profit sectors.</p>
                <hr />
                <p>Working with diverse teams of developers and UX designers, I’ve applied my experience with front-end and back-end technologies to build responsive websites that provide a seamless interaction for users. Prior to engineering, I worked for consulting firms and non-profits where I garnered experience managing programs, teams, budgets and business development processes. When I'm not writing code, you'll find me on my bike or in the Cascades.</p>
              </div>
              <div className="col-md-4">
                <img src="/images/BW-Colin.jpg" alt="headshot of Colin Groark" />
              </div>
            </div>
          </article>
          <article id='projects'>
          <h1>Recent Projects</h1>
            <div className="row">
              <div className='col-md-6'>
                <h2>Weather Watcher</h2>

                <WeatherSearch />
              </div>
              <div className='col-md-6'>
                <h2>Find a Park</h2>
                <Parks />
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
