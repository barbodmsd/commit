import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default class CleanChat extends Component {
  render() {
    return (
        <div class="container bootstrap snippets">
< class="col-md-7 col-xs-12 col-md-offset-2">
        <div className="panel" id="chat">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
