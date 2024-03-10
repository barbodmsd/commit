import React, { Component } from "react";
import Asaide from "./Asaide";
import Main from "./Main";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentIndexPost: null,
    };
  }
  componentDidMount() {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        this.setState({ posts: data, currentIndexPost: 0 });
      } catch (err) {
        alert(err);
      }
    })();
  }
  handleTitle(index){
    this.setState({currentIndexPost:index})
  }
  render() {
    return (
      <>
        {this.state.posts ? (
          <>
            <Asaide posts={this.state.posts} handleTitle={this.handleTitle.bind(this)}/>
            <Main post={this.state.posts[this.state.currentIndexPost]} />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    );
  }
}
