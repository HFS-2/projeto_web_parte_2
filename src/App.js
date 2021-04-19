import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <HashRouter>
      <Routes/>
    </HashRouter>
  );
}

export default App;

