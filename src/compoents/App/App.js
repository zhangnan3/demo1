import React, { Component } from 'react'
import './app.css'
import Signup from '../Signup/signup'
import Login from '../Login/login'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Signup />
        <Login />
      </div>
    )
  }
}

export default App
