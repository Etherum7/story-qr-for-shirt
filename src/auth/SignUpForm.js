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
		width: '60%'
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
		height: '65%',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
function SignUpForm(props) {
	const theme = useTheme();
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

	function handleSubmit(e) {
		e.preventDefault();
	}
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
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) =>
										setPassword(e.target.value)}
									label="Password"
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
									value={confirmPassword}
									required
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) =>
										setConfirmPassword(e.target.value)}
									label="Confirm Password"
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
							</FormControl>

							<FormControl variant="outlined">
								<InputLabel htmlFor="username">
									Username
								</InputLabel>
								<OutlinedInput
									id="username"
									value={userName}
									required
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) =>
										setUserName(e.target.value)}
									label="userName"
								/>
							</FormControl>
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
