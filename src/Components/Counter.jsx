import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handlePlus
  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button className='btn btn-danger '>-</button>
        <button className='btn btn-primary '>+</button>
      </div>
    )
  }
}
