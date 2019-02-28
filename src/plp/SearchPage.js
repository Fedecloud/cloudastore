import React, { Component } from 'react';
import Grid from  './Grid/Grid'
import Filters from  './Filters/Filters'
import Header from  '../core/Header/Header'
import './search-page.css';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        <Header />
        <div className="filters-container">
          <Filters />
        </div>
        <div className="grid-container">
          <Grid />
        </div>
      </div>
    );
  }
}

export default SearchPage;
