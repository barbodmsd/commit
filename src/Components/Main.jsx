import React, { Component } from 'react'
import Comments from './Comments'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:null
        }
    }
    componentDidMount(){
        (async()=>{
            try{
                const res=await fetch(`http://localhost:3000/comments`)
                const data=await res.json()
                this.setState({comments:data})
            }catch(err){alert(err)}
        })()
    }
  render() {
    return (
        <div class="container">
        <div class="post">
            <img src={`assets/${this.props.post.image}`} alt=""/>
            <h1>{this.props.post.title}</h1>
            <div>{this.props.post.body}</div>
        </div>
       <Comments comments={}/>
    </div>
    )
  }
}
