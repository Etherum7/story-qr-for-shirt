import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = {
	navBar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '10vh',
		backgroundColor: '#d178f2'
	},
	logo: {
		display: 'inline-block'
	},
	brandName: {
		display: 'inline-block'
	},
	buttons: {
		display: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
};
function NavBar(props) {
	const {classes} = props;
	return (
		<div className={classes.navBar}>
			<div>
				<div className={classes.logo} style={{marginRight: '0.5rem'}}>
					😎
				</div>
				<div className={classes.brandName}>
					MAKE YOUR SHIRT INFORMATIC
				</div>
			</div>

			<div className={classes.buttons}>
				<Button
					variant="contained"
					color="primary"
					style={{marginRight: '0.5rem'}}>
					LOGIN
				</Button>
				<Button variant="contained" color="secondary">
					SIGN UP
				</Button>
			</div>
		</div>
	);
}
export default withStyles(styles)(NavBar);
