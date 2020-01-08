/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.setGifId = this.setGifId.bind(this);

    this.state = {
      gifs: [],
      selectedGifId: "jRwQlDxgQuLsn1L1ZM"
    };
  }

  setGifId = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy('dJMw8mSlqICM1UfkLvkyRDelY3241ZYC').search({
      q: query,
      rating: 'g',
      limit: 10,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} setGifIDFunction={this.setGifId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
