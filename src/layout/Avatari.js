import React, {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';
import firebase, {db} from '../config/fbconfig';
const styles = (theme) => ({
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500]
	}
});

function Avatari(props) {
	const {classes} = props;
	const [
		value,
		setValue
	] = useState('');

	useEffect(() => {
		// {Error is happening here}
		// const abortController = new AbortController();
		// const signal = abortController.signal;

		const user = firebase.auth().currentUser;

		if (user) {
			db.collection('users').doc(user.uid).get().then(
				function(result) {
					let name = result.data();
					//console.log(name);
					setValue(name.username.toUpperCase().slice(0, 2));
				},
				function(error) {
					console.log(error);
					return error;
				}
			);
		}
		return function cleanUp() {
			setValue('');
		};
	}, []);

	return (
		<React.Fragment>
			<Avatar className={classes.purple}>{value}</Avatar>
		</React.Fragment>
	);
}
export default withStyles(styles)(Avatari);
