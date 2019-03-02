import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductPrice from '../../core/ProductPrice/ProductPrice';
import './product-tile.css';

class ProductTile extends Component {

  render() {
  	const {
  		name,
  		price,
  		images,
  		id
  	} = this.props.product

    return (
      <Link className="tile-wrapper" to={`/pdp/${id}`}>
      	<div>
					<img className="tile-image" src={images[0]} /> 
      	</div>
      	<div className="tile-description">
      		<span>{name}</span>
      		<ProductPrice price={price} />
      	</div>
      </Link>
    );
  }
}

export default ProductTile;
