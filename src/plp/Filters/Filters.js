import React, { Component } from 'react';
import './filters.css';
import { MockFilters } from '../../mock/mock-filters'

class Filters extends Component {
	renderFilters() {
		return MockFilters.map((filter, i) => {
			return (
				<div key={i}>
					<a href={filter.link}>{filter.name}</a>
				</div>
			)
		})
	}

  render() {
    return (
      <div className="filters-container">

      	{this.renderFilters()}
      </div>
    );
  }
}

export default Filters;
