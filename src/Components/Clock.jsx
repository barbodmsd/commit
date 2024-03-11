import React, { Component } from "react";
import Time from "./Time";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
    };
  }
  render() {
    return (
      <>
        {this.state.showTime && <Time />}
        <button
          className={`btn ${
            this.state.showTime ? "btn bg-danger " : "btn-success "
          }`}
          onClick={() => this.setState({showTime:!this.state.showTime})}
        >
          {this.state.showTime ? "Hide time" : "Show time"}
        </button>
      </>
    );
  }
}
