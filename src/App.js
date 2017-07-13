import React, { Component } from 'react';
import './App.css';
import Enrollment from './modules/Enrollment';
import UserList from './modules/ListUser';
import Header from './modules/Header';
import Landing from './modules/Landing';
import Register from './modules/Register';

class App extends Component {
  state = {
        isLoggedIn :false,
        errorMsg  : null,
        email     :null
    }

  render() {

      var Child;
      switch(this.props.route) {
          case 'home': Child = UserList; break;
          case 'login': Child = Enrollment; break;
          case 'register': Child = Register; break;
          default: Child = Landing;
      }

      return (
          <div className="container-fluid">
              <Header loggedInStatus = {this.state} />
              <Child  loggedInStatus = {this.state}/>
          </div>
      );

  }
}

export default App;
