import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";


class App extends React.Component {
  constructor() {
    super()
    //this is where state will go
    this.state = {
      dataset: []
    }
  };
  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data)
        this.setState({dataSet: response.data})
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
