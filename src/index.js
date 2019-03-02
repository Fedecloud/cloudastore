import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchPage from './plp/SearchPage';
import ProductPage from './pdp/ProductPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Navigation = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={App} />
			<Route path="/pdp/:id" component={ProductPage} />
			<Route path="/cart" component={App} />
			<Route path="/search" component={SearchPage} />
			<Route path="/category/:category" component={SearchPage} />
		</Fragment>
	</Router>
)

ReactDOM.render(<Navigation />, document.getElementById('root'));
