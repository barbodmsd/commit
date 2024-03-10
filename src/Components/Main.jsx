import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:null
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
        <div class="comments">
            <p>Comments:</p>
            <div class="comment">
                <p>Comment 1</p>
            </div>
            <div class="comment">
                <p>Comment 2</p>
            </div>
            <div class="comment">
                <p>Comment 3</p>
            </div>
        </div>
    </div>
    )
  }
}
