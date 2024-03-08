import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handlePlus(){
        this.setState({count:this.state.count+1})
    }
    handleMines(){
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button className='btn btn-danger ' disabled={!this.state.count} onClick={this.handleMines.bind(this)}>-</button>
        <button className='btn btn-primary 'onClick={this.handlePlus.bind(this)}>+</button>
      </div>
    )
  }
}
