import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';
import Home from './components/home';
import Calculator from './components/calculator/calculator';
import Help from './components/help/help';
import MacroDivider from './components/macrodivider/macrodivider';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home} />
					<Route path="/calculator" component={Calculator} />
					<Route path="/macrodivider" component={MacroDivider} />
					<Route path="/help" component={Help} />
				</Route>
			</Router>
		</Provider>, document.getElementById('app'));
});