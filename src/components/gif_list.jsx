/* eslint-disable react/destructuring-assignment */
// eslint-disable react/prefer-stateless-function
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  setSelected = (gif) => {
    this.props.setGifIDFunction(gif);
  }

  renderList = () => {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} clickFunction={this.setSelected} />;
    });
  }

  render = () => {
    return (
      this.renderList()
    );
  }
}

export default GifList;
