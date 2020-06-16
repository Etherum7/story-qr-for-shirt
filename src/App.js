import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import SocialProfile from './profile/SocialProfile';
import ProfessionalProfile from './profile/ProfessionalProfile';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={DashBoard} />
					<Route exact path="/signin" component={SignInForm} />
					<Route exact path="/signup" component={SignUpForm} />
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
