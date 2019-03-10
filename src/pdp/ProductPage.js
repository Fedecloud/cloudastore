import React, { Component } from 'react'
import Header from  '../core/Header/Header'
import PdpImages from './PdpImages/PdpImages'
import PdpMainDetails from './PdpMainDetails/PdpMainDetails'
import { Product } from '../mock/mock-product'
import './product-page.css'

class ProductPage extends Component {

  render() {
    return (
      <div className="pdp-page">
        <Header />
        <div className="info-container">
          <PdpImages images={Product.images} />
          <PdpMainDetails {...Product} />
        </div>
        <div className="description-container">
          <h3>{Product.name}</h3>
          <p>{Product.product_description.text}</p>
        </div>
      </div>
    );
  }
}

export default ProductPage;
