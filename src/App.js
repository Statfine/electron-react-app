import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello word</h1>
        </header>
        <p className="App-intro">Welcome to React Electron</p>
        <p className="App-intro">
          router:<code>src/app/containers/App/index.js</code>
        </p>
        <p>参考：http://www.jianshu.com/p/785ed0ac08ee</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default App;
