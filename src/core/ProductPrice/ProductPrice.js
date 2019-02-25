import React, { Component } from 'react';
import './product-price.css';

class ProductPrice extends Component {

  render() {
  	const {
  		standard_price: price,
      sale_price: salePrice
  	} = this.props.price

    return (
      <div className="price-wrapper">
        <span>{price}</span>
        { salePrice ?
          <span>{salePrice}</span>
          : null
        }

      </div>
    );
  }
}

export default ProductPrice;
