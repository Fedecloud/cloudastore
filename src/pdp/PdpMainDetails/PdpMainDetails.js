import React, { Component } from 'react'
import './pdp-main-details.css'

class PdpMainDetails extends Component {

  render() {
    const {
      name,
      badge_text,
      brand,
      price
    } = this.props

    return (
      <div className="details-container">
        <h1>{name}</h1>
        <span>{badge_text}</span>
        <span>{brand}</span>
        <span>{price.standard_price}</span>
      </div>
    );
  }
}

export default PdpMainDetails;
