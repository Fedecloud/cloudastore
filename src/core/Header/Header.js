import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
      	<div className="logo-wrapper">
      		<Link to="/">
      			<img className="header-logo" src="https://clouda.shop/images/clouda.png" />
      		</Link>
      	</div>
      	<div className="link-wrapper">
		    	<Link className="header-link" to="/">Home</Link>
		    	<Link className="header-link" to="/category/men">Men</Link>
		    	<Link className="header-link" to="/category/women">Women</Link>
		    	<Link className="header-link" to="/category/kids">Kids</Link>
		    </div>
	    </div>
    );
  }
}

export default Header;
