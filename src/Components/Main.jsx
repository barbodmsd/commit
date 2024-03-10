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
                const res=await fetch(`http://localhost:3000/comments?post-id=${this.props.post.id}`)
                const data=await res.json()
                this.setState({comments:data})
            }catch(err){alert(err)}
        })()
    }
    componentDidUpdate(prevProps){
        if(prevProps.post.id!==this.props.post.id){
            (async()=>{
                try{
                    const res=await fetch(`http://localhost:3000/comments?post-id=${this.props.post.id}`)
                    const data=await res.json()
                    this.setState({comments:data})
                }catch(err){alert(err)}
            })()
        }
    }
  render() {
    return (
        <div class="container">
        <div class="post">
            <img src={`assets/${this.props.post.image}`} alt=""/>
            <h1>{this.props.post.title}</h1>
            <div>{this.props.post.body}</div>
        </div>
       <Comments comments={this.state.comments}/>
    </div>
    )
  }
}
