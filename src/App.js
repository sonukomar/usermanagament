import React, { Component } from 'react';
import './App.css';
import Enrollment from './modules/Enrollment';
import UserList from './modules/ListUser';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Enrollment />
        <UserList />
      </div>
    );
  }
}

export default App;
