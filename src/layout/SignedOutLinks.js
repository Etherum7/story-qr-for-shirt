import React from 'react';

import Button from '@material-ui/core/Button';

import {NavLink} from 'react-router-dom';

function SignedOutLinks() {
	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				style={{marginRight: '0.5rem'}}
				>
				<NavLink
					to="/signin"
					style={{textDecoration: 'none', color: 'white'}}>
					LOGIN
				</NavLink>
			</Button>
			<Button variant="contained" color="secondary">
				<NavLink
					to="/signup"
					style={{textDecoration: 'none', color: 'white'}}>
					SIGN UP
				</NavLink>
			</Button>
		</div>
	);
}
export default SignedOutLinks;
