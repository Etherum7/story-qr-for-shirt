import React, {useState} from 'react';
import NavBar from '../layout/NavBar';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const styles = {
	root: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	divForm: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '50%'
	},
	form: {
		display: 'flex',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Paper: {
		display: 'flex',
		width: '50%',
		height: '55%',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
function SignInForm(props) {
	const [
		email,
		setEmail
	] = useState('');
	const [
		password,
		setPassword
	] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
	}

	const {classes} = props;
	return (
		<React.Fragment>
			<NavBar />
			<div className={classes.root}>
				<Paper className={classes.Paper}>
					<div className={classes.divForm}>
						<form className={classes.form} onSubmit={handleSubmit}>
							<Typography
								variant="h3"
								style={{marginTop: '-1rem'}}>
								Sign In
							</Typography>
							<TextField
								required
								label="Email"
								type="email"
								value={email}
								autoFocus
								fullWidth
								margin="normal"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								required
								label="Password"
								type="password"
								value={password}
								fullWidth
								margin="normal"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button
								type="submit"
								variant="outlined"
								color="secondary"
								style={{marginTop: '1rem'}}>
								Submit
							</Button>
						</form>
					</div>
				</Paper>
			</div>
		</React.Fragment>
	);
}

export default withStyles(styles)(SignInForm);
