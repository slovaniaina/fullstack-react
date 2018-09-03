import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Demo.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  render() {
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1, name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
          id: 2, name: 'Ari',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Third comment",
        user: {
          id: 3, name: 'Caro',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Danny', text: 'I am so jealous' }]
      },
    ]

    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content activities={activities}/>
        </div>
      </div>
    )
  }
}

export default App;
