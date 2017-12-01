import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src={logo} alt=""/>
          <h2>我喜欢贾静雯</h2>
        </div>
        <p>贾静雯喜欢我。。。</p>
      </div>
    )
  }
}

export default App;