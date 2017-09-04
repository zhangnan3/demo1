import React, { Component } from 'react'
import './login.css'
import Button from '../Button/Button'

class Login extends Component {
  sayHello = () => {
   alert('标题被单机了')
 }
  render () {
    return (
      <div className='login'>
        Login
        <Button>登录</Button>
      <h1 onClick={this.sayHello}>点我</h1>
      </div>



    )
  }
}

export default Login
