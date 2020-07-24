import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import {Link} from 'react-router-dom';
import Avatari from './Avatari';
import firebase from '../config/fbconfig';

function SignedInLinks(props) {
	const {handleOnLogout} = props;

	const handleLogout = () => {
		firebase.auth().signOut().then(
			function() {
				// dialog Logged Out Successfully
				handleOnLogout();
				//props.history.push('/');
			},
			function(error) {}
		);
	};

	return (
		<div>
			

			<IconButton color="primary" aria-label="Alerts">
				<NotificationsActiveOutlinedIcon />
			</IconButton>
			<IconButton color="primary" aria-label="add to shopping cart">
				<AddShoppingCartIcon />
			</IconButton>
			<Button
				variant="contained"
				color="secondary"
				onClick={handleLogout}>
				LOG OUT
			</Button>
			<Button onClick={handleLogout}>
				<Link to="/">
					<Avatari />
				</Link>
			</Button>
		</div>
	);
}
export default SignedInLinks;
