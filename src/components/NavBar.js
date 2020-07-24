import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
const styles = {
	navBar    : {
		display         : 'flex',
		justifyContent  : 'space-between',
		alignItems      : 'center',
		height          : '8vh',
		backgroundColor : '#b5bbbf',
		width           : '100%',
		top             : 0,
		left            : 0,
		right           : 0,

		flexGrow        : 1
	},
	logo      : {
		display : 'inline-block'
	},
	brandName : {
		display : 'inline-block'
	},
	buttons   : {
		display        : 'flex-end',
		flexDirection  : 'row',
		justifyContent : 'space-between',
		marginRight    : '1rem'
	},
	Pricing   : {
		display        : 'flex',
		justifyContent : 'flex-end',
		flexGrow       : 3,
		marginRight    : '1rem'
	}
};
function NavBar(props) {
	const { classes } = props;
	return (
		<div className={classes.navBar}>
			<div>
				<div className={classes.logo} style={{ marginRight: '0.5rem' }}>
					<Link to="/">
						<span role="img" aria-labelledby="Logo for company">
							💖
						</span>
					</Link>
				</div>
				<div className={classes.brandName}>
					MAKE YOUR SHIRT INFORMATIC
				</div>
			</div>
			<div className={classes.Pricing}>
				<Button variant="text" color="secondary">
					<Link
						to="/"
						style={{
							textDecoration : 'none',
							fontSize       : '100%',
							marginLeft     : 0
						}}>
						Pricing
					</Link>
				</Button>
			</div>

			<div className={classes.buttons}>
				{props.loggedIn ? (
					<SignedInLinks handleOnLogout={props.handleOnLogout} />
				) : (
					<SignedOutLinks />
				)}
			</div>
		</div>
	);
}
export default withStyles(styles)(NavBar);
