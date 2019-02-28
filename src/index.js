import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchPage from './plp/SearchPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Navigation = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={App} />
			<Route path="/search" component={SearchPage} />
			<Route path="/pdp" component={App} />
			<Route path="/cart" component={App} />
			<Route path="*" component={SearchPage} />
		</Fragment>
	</Router>
)

ReactDOM.render(<Navigation />, document.getElementById('root'));
