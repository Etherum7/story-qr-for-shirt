import React from 'react';
import NavBar from '../layout/NavBar';
import SignedOutDashBoard from './SignedOutDashBoard';
import SignedInDashBoard from './SignedInDashBoard';

function DashBoard() {
	const isLoggedIn = false;
	return (
		<div>
			<NavBar loggedIn ={isLoggedIn}/>
			{isLoggedIn ? <SignedInDashBoard /> : <SignedOutDashBoard />}
		</div>
	);
}
export default DashBoard;
