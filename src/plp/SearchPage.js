import React, { Component } from 'react';
import Grid from  './Grid/Grid'
import './search-page.css';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        Search
        <Grid />
      </div>
    );
  }
}

export default SearchPage;
