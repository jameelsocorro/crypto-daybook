import 'js-ui-kit/assets/sass/main.scss';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginModule from './modules/login';

import './App.css';

class App extends Component {
  render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginModule} />
				</Switch>
			</Router>
		);
	}
}

export default App;
