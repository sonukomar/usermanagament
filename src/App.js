import React, { Component } from 'react';

import './App.css';
import Enrollment from './modules/Enrollment';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Enrollment />
      </div>
    );
  }
}

export default App;
