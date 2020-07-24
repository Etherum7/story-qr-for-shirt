import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import SignInPage from './auth/SignInPage';
import SignUpPage from './auth/SignUpPage';
import SocialProfile from './profile/SocialProfile';
import ProfessionalProfile from './profile/ProfessionalProfile';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={DashBoard} />
					<Route
						exact
						path="/signin"
						render={(routeProps) => <SignInPage {...routeProps} />}
					/>
					<Route
						exact
						path="/signup"
						render={(routeProps) => <SignUpPage {...routeProps} />}
					/>
					<Route
						exact
						path="/:username/create/social"
						component={SocialProfile}
					/>
					<Route
						exact
						path="/:username/create/professional"
						component={ProfessionalProfile}
					/>
					<Route exact path="/:username" component={DashBoard} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
