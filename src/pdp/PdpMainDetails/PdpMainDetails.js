import React, { Component } from 'react'
import ProductPrice from '../../core/ProductPrice/ProductPrice';
import './pdp-main-details.css'

class PdpMainDetails extends Component {

  render() {
    const {
      name,
      badge_text,
      brand,
      price,
      product_description: { subtitle }
    } = this.props

    return (
      <div className="details-container">
        <span>{badge_text}</span>
        <h1>{name}</h1>
        <p>{brand}</p>
        <div>Price: <ProductPrice price={price} /> </div>
        <p>{subtitle}</p>
        <div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default PdpMainDetails;
