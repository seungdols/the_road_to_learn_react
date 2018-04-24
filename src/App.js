import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var h2Text = 'Hello, React World'
    var user = {
      firstName: 'seungdols',
      lastName: 'choi'
    }
    return (
      <div className="App">
        <h2>{h2Text}</h2>
        <p>user.firstName: {user.firstName}</p>
        <p>user.lastName: {user.lastName}</p>
      </div>
    )
  }
}

export default App;
