import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default class CleanChat extends Component {
    constructor(props){
        super(props)
        this.state={
            barbodTitle:"Saleh",
            barbodMassageList:[
                {
                    type:'sent',
                    massage:'Good morning, sir. What can I do for you?',
                    time:'11:37:08 AM'
                },
                {
                    type:'receive',
                    massage:'Well, I AM just looking around.',
                    time:'11:39:08 AM'
                },
                {
                    type:'sent',
                    massage:'If necessary, please ask me. Barbod',
                    time:'11:40:08 AM'
                },
            ],
            barbodAvatar:{
                Saleh:'https://bootdey.com/img/Content/avatar/avatar1.png',
                barbod:'https://bootdey.com/img/Content/avatar/avatar2.png',
            }
        }
    }
  render() {
    return (
        <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </div>
        </div>
    )
  }
}
