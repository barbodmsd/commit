import React, { Component } from 'react'
import Asaide from './Asaide'
import Main from './Main'

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:null,
            currentIndexPost:null
        }
    }
  render() {
    return (
      <>
       <Asaide/>
        <Main/>
      
      </>
    )
  }
}
