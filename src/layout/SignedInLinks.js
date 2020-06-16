import React from 'react';
import {NavLink} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import {Link} from 'react-router-dom';
const styles = (theme) => ({
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500]
	}
});

function SignedInLinks(props) {
	const {classes} = props;
	return (
		<div>
			<IconButton color="primary" aria-label="Alerts">
				<NotificationsActiveOutlinedIcon />
			</IconButton>
			<IconButton color="primary" aria-label="add to shopping cart">
				<AddShoppingCartIcon />
			</IconButton>
			<Button variant="contained" color="secondary">
				<NavLink
					to="/signin"
					style={{textDecoration: 'none', color: 'white'}}>
					LOG OUT
				</NavLink>
			</Button>
			<Button>
				<Link to="/">
					<Avatar className={classes.purple}>HS</Avatar>
				</Link>
			</Button>
		</div>
	);
}
export default withStyles(styles)(SignedInLinks);
