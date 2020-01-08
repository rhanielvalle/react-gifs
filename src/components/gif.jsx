/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.clickFunction(event.target.id);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" id={this.props.id} onClick={this.handleClick} />
    );
  }
}

export default Gif;
