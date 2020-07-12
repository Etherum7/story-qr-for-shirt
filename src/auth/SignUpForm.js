import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import NavBar from '../layout/NavBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//Authentication
import firebase, {db} from '../config/fbconfig';

const styles = {
	root: {
		position: 'relative',
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
		width: '80%'
	},
	form: {
		display: 'flex',
		height: '100%',
		width: '80%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Paper: {
		display: 'flex',
		width: '50%',
		height: '80%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	error: {
		color: 'red',
		marginLeft: '0.5rem',
		marginBottom: '1rem'
	}
};
function SignUpForm(props) {
	const theme = useTheme();
	const alphaNumeric = RegExp(/^[a-z0-9]+$/i);
	const [
		errors,
		setErrors
	] = useState({
		userName: '',
		ConfirmPassword: '',
		Password: ''
	});
	const [
		email,
		setEmail
	] = useState('');
	const [
		password,
		setPassword
	] = useState('');
	const [
		confirmPassword,
		setConfirmPassword
	] = useState('');
	const [
		showPassword,
		setShowPassword
	] = useState(false);
	const [
		showConfirmPassword,
		setShowConfirmPassword
	] = useState(false);
	const [
		userName,
		setUserName
	] = useState('');
	const [
		submitting,
		setSubmitting
	] = useState(false);

	const handleChange = (event) => {
		//event.preventDefault();
		const {name, value} = event.target;

		switch (name) {
			case 'password':
				setErrors({
					userName: errors.userName,
					Password:
						value.length < 8
							? 'Password must be 8 characters long!'
							: '',
					ConfirmPassword: errors.ConfirmPassword
				});

				setPassword(value);
				break;
			case 'confirmPassword':
				setErrors({
					userName: errors.userName,
					Password: errors.Password,
					ConfirmPassword:
						value !== password ? "Password don't Match" : ''
				});
				setConfirmPassword(value);
				break;
			case 'userName':
				setErrors({
					userName: alphaNumeric.test(value)
						? ''
						: 'Username Must contain only alphanumeric charecters',
					Password: errors.Password,
					ConfirmPassword: errors.ConfirmPassword
				});

				setUserName(value);
				break;
			default:
				break;
		}
	};
	const validateForm = (errors) => {
		let valid = true;
		Object.values(errors).forEach(
			// if we have an error string set valid to false
			(val) => val.length > 0 && (valid = false)
		);
		return valid;
	};
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleClickShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleMouseDownConfirmPassword = (event) => {
		event.preventDefault();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm(errors)) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
					if (errorCode === 'auth/weak-password') {
						alert('The password is too weak.');
					} else {
						alert(errorMessage);
					}
					console.log(error);
				});
			//Error
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					//console.log(user);
					db
						.collection('users')
						.doc(user.uid)
						.set({username: userName});

					db
						.collection('users')
						.doc(user.uid)
						.get()
						.then(function(result) {
							props.history.push(`/${result.data().username}`);
						});
				}
			});
		} else {
			setSubmitting(true);
			console.error('Invalid Form');
		}
	};

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
								Sign Up
							</Typography>
							<FormControl variant="outlined">
								<InputLabel htmlFor="email">Email</InputLabel>
								<OutlinedInput
									id="email"
									type="email"
									value={email}
									required
									autoFocus
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) => setEmail(e.target.value)}
									label="Email"
								/>
							</FormControl>
							<FormControl variant="outlined">
								<InputLabel htmlFor="password">
									Password
								</InputLabel>
								<OutlinedInput
									id="password"
									value={password}
									type={showPassword ? 'text' : 'password'}
									fullWidth
									required
									name="password"
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) => handleChange(e)}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													handleClickShowPassword
												}
												onMouseDown={
													handleMouseDownPassword
												}
												edge="end">
												{showPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
								{submitting && (
									<span className={classes.error}>
										{errors.Password}
									</span>
								)}
							</FormControl>

							<FormControl variant="outlined">
								<InputLabel htmlFor="confirm-password">
									Confirm Password
								</InputLabel>
								<OutlinedInput
									id="confirm-password"
									type={
										showConfirmPassword ? (
											'text'
										) : (
											'password'
										)
									}
									name="confirmPassword"
									value={confirmPassword}
									required
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) => handleChange(e)}
									//label="Confirm Password"
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle confirm password visibility"
												onClick={
													handleClickShowConfirmPassword
												}
												onMouseDown={
													handleMouseDownConfirmPassword
												}
												edge="end">
												{showConfirmPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
								{submitting && (
									<span className={classes.error}>
										{errors.ConfirmPassword}
									</span>
								)}
							</FormControl>

							<FormControl variant="outlined">
								<InputLabel htmlFor="username">
									Username
								</InputLabel>
								<OutlinedInput
									id="username"
									value={userName}
									name="userName"
									required
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) => handleChange(e)}
									label="userName"
								/>
							</FormControl>
							{submitting && (
								<span className={classes.error}>
									{errors.userName}
								</span>
							)}
							<Button
								type="submit"
								variant="outlined"
								color="primary"
								style={{marginTop: '1rem'}}>
								Sign Up
							</Button>
						</form>
					</div>
				</Paper>
			</div>
		</React.Fragment>
	);
}

export default withStyles(styles)(SignUpForm);
