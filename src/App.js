import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path='/' component={DashBoard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
