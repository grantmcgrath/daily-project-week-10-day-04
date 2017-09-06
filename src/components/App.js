import React, { Component } from 'react';
import '../styles/App.css';
import img from "../images/splash.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Splash Page!</h1>
        <div>
          <img src={img} alt="Splash!" />
        </div>
      </div>
    );
  }
}

export default App;
