import React from 'react';
import logo from './logo.svg';
import './App.css';
import Destaque from './Destaque';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primeiro teste de como separar elementos no React, utilizando componentes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-intro">
          <Destaque
            autor="Ricardo"
            artigo="Os benefícios de uma vida saudável" />

          <Destaque
            autor="Bruna"
            artigo="Como evitar a procrastinação?" />
        </p>

      </header>
    </div>
  );
}

export default App;
