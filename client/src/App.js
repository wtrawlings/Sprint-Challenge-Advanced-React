import React from 'react';
import './App.css';
import Axios from "axios";
import NameData from "./components/NameData"


class App extends React.Component {
  constructor() {
    super()
    //this is where state will go
    this.state = {
      dataSet: [],
      clickToggle: false
    }
    
    this.toggleMode = e => {
      e.preventDefault();
      console.log("clicked!")
      //console.log(this.state.clickToggle) 
      this.setState({clickToggle: !this.state.clickToggle});
      console.log(this.state.clickToggle);
      
      
      // opposite? Toggle DONE!
      //const [clickToggle, setClickToggle] = useLocalStorage("key", clickToggle);
      //I can't useLocalStorage in this because it's not a component just a method
      //inside of a component. I want to save clickToggle and use that
      //but it's not working, the clickToggle is only changing once.
     
    };
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
        <p>Here is some data they want displayed. </p><p>Now we need to make a hook and do a couple of tests.</p>
        <button onClick={this.toggleMode}> toggle </button>
        <h1>{`Local Storage Check: ${this.state.clickToggle}`}</h1>
        {console.log("verify - " + this.state.clickToggle)}
        <NameData 
          dataSet={this.state.dataSet}
          clickToggle={this.state.clickToggle}
        />
      </div>
    );
  }
  
}

export default App;
