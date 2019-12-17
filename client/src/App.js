import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import NameData from "./components/NameData"

class App extends React.Component {
  constructor() {
    super()
    //this is where state will go
    this.state = {
      dataSet: []
    }
  };
  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        //console.log(response.data)
        this.setState({dataSet: response.data})
      })
  }
  render() {
    return (
      <div className="App">
        <h1>You can do this Warren!</h1>
        <p>Here is some data they want displayed</p>
        <NameData 
          dataSet={this.state.dataSet}
        />
      </div>
    );
  }
  
}

export default App;
