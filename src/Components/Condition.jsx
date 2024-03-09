import React, { Component } from 'react'
import User from './user'
import Guest from './Guest'

export default class Condition extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:false
        }
    }
    handleClick(){
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
  render() {
    return (
      <>
      {this.state.isLogin?<User/>:<Guest/>}this
      <button className={`btn ${this.state.isLogin?'btn-danger':'btn-success '}`} onClick={}>{this.state.isLogin?'Logout':'Login'}</button>
      </>
    )
  }
}
