import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import SignIn from './auth/SignInForm';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={DashBoard} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/:username" component={DashBoard} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
