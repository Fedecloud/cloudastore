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
        <span className={`regular ${salePrice ? 'has-sale' : ''}`}>{price}</span>
        { salePrice ?
          <span className="sale">{salePrice}</span>
          : null
        }

      </div>
    );
  }
}

export default ProductPrice;
