import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Demo.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}

export default App;
