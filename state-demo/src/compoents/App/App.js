import React, { Component } from 'react';
// import Count from ""
import './app.css';

class App extends Component {
  state ={
    count:0
  }
  handleClick =() => {
    this.setState({
      count:this.state.count + 1
    })
  }
  handleClick1 =() => {
    this.setState({
      count:this.state.count - 1
    })
  }
 render() {
    return (
      <div className="app">
         <div onClick={this.handleClick} id="count" className="count">+
         </div>
           <p>{this.state.count}</p>


         <div onClick={this.handleClick1} id="count1" className="count1">-
         </div>

      </div>

    )
  }
}

export default App;
