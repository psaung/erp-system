import React, { Component } from 'react'

export default class CommentBox extends Component {

  constructor() {
    super()
    this.state = { comment: '' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  onSubmit(event) {
    this.setState({ comment: '' })
  }
  
  render() {
    let comment
    return (
      <div className="comment-box">
        <textarea
          ref={(input) => { 
            this.textInput = input 
          }}
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button onClick={this.onSubmit}>Submit Comment</button>
      </div>
    )
  }
}
