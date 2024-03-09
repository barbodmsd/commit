import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props){
    super(props)
    this.state={
      inp:''
    }
  }
  handleSubmit(e){
e.preventDefault()
this.props.handleMassage(this.state.inp)
this.setState({inp:''})
  }
  render() {
    return (
        <div className="panel-footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input value={this.state.inp} onChange={(e)=>this.setState({inp:e.target.value})} type="text" className="form-control" placeholder="Say something"/>
            <span className="input-group-btn">
              <button disabled={!this.state.inp} className="btn btn-primary" type="submit">Send</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
