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
                saleh:'https://bootdey.com/img/Content/avatar/avatar1.png',
                barbod:'https://bootdey.com/img/Content/avatar/avatar2.png',
            },
            salehTitle:"Saleh",
            salehMassageList:[
                {
                    type:'receive',
                    massage:'Good morning, sir. What can I do for you?',
                    time:'11:37:08 AM'
                },
                {
                    type:'sent',
                    massage:'Well, I AM just looking around.',
                    time:'11:39:08 AM'
                },
                {
                    type:'receive',
                    massage:'If necessary, please ask me. Barbod',
                    time:'11:40:08 AM'
                },
            ],
            salehAvatar:{
                saleh:'https://bootdey.com/img/Content/avatar/avatar2.png',
                barbod:'https://bootdey.com/img/Content/avatar/avatar1.png',
            }
        }
    }
    barbodSent(massage){
        this.setState({
            barbodMassageList:[
                ...this.state.barbodMassageList,
                {
                    type:'sent',
                    massage,
                    time:new Date().toLocaleTimeString()
                }
            ],
            salehMassageList:[
                ...this.state.salehMassageList,
                {
                    type:"receive",
                    massage,
                    time:new Date().toLocaleTimeString()
                }
            ]
        })
    }
    salehSent(massage){
        this.setState({
            salehMassageList:[
                ...this.state.salehMassageList,
                {
                    type:'sent',
                    massage,
                    time:new Date().toLocaleTimeString()
                },
            ],
            barbodMassageList:[
                ...this.state.barbodMassageList,
                {
                    type:'recieve',
                    massage,
                    time:new Date().toLocaleTimeString()
                }
            ]
        })
    }
  render() {
    return (
        <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Header title={this.state.barbodTitle}/>
            <Main massageList={this.state.barbodMassageList} avatar={this.state.barbodAvatar}/>
            <Footer />
          </div>
        </div>
        </div>
    )
  }
}
