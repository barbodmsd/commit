import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    co
  render() {
    return (
      <div>Time</div>
    )
  }
}
