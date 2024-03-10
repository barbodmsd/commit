import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state.
    }
  render() {
    return (
        <div class="container">
        <div class="post">
            <img src="./assets/1.jpg" alt=""/>
            <h1>Post Title</h1>
            <div>She never liked cleaning the sink. It was beyond her comprehension how it got so dirty so quickly.
                It seemed that she was forced to clean it every other day. Even when she was extra careful to keep
                things clean and orderly, it still ended up looking like a mess in a couple of days. What she didn't
                know was there was a tiny creature living in it that didn't like things neat.</div>
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
