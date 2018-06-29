import React, { Component } from 'react';
import './App.css';
import MySwitch from './routes'
import Header from './component/Header/Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MySwitch />
      </div>
    );
  }
}

export default App;
