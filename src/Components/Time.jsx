import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()})
            console.log(this.state.time);
        },1000)
    }
  render() {
    return (
      <>
      {this.state.time}
      
      </>
    )
  }
}
