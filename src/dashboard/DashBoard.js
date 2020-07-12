import React, {useState, useEffect} from 'react';
import NavBar from '../layout/NavBar';
import SignedOutDashBoard from './SignedOutDashBoard';
import SignedInDashBoard from './SignedInDashBoard';
import firebase from '../config/fbconfig';
function DashBoard(props) {
	const [
		isLoggedIn,
		setIsLoggedIn
	] = useState(false);
	const handleOnLogout = () => {
		setIsLoggedIn(false);
		props.history.push('/');
	};
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(currentUser) {
			if (currentUser) {
				setIsLoggedIn(true);
			}
		});
	}, []);

	return (
		<div>
			<NavBar
				loggedIn={isLoggedIn}
				handleOnLogout={handleOnLogout}
				history={props.history}
			/>
			{isLoggedIn ? <SignedInDashBoard /> : <SignedOutDashBoard />}
		</div>
	);
}
export default DashBoard;
