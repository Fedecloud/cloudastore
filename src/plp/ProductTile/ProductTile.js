import React, { Component } from 'react';
import ProductPrice from '../../core/ProductPrice/ProductPrice';
import './product-tile.css';

class ProductTile extends Component {

  render() {
  	const {
  		name,
  		price
  	} = this.props.product

    return (
      <div className="tile-wrapper">
      	<div>
      		{// <img src={} /> 
      		}
      	</div>
      	<div className="tile-description">
      		<span>{name}</span>
      		<ProductPrice price={price} />
      	</div>
      </div>
    );
  }
}

export default ProductTile;
