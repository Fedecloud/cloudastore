import React, { Component } from 'react';
import './grid.css';
import { Catalog } from '../../mock/mock-catalog'
import ProductTile from '../ProductTile/ProductTile'

class Grid extends Component {
	renderProducts() {
		console.log(Catalog)
		return Catalog.map((product, i) => {
			return (
				<div key={product.id + i} className="grid-tile">
					<ProductTile product={product} />
				</div>
			)
		})
	}

  render() {
    return (
      <div className="grid-wrapper">

      	{this.renderProducts()}
      </div>
    );
  }
}

export default Grid;
