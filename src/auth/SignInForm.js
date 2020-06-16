import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import NavBar from '../layout/NavBar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
		showPassword,
		setShowPassword
	] = useState(false);
	function handleSubmit(e) {
		e.preventDefault();
	}
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
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
								style={{
									marginTop: '-2rem',
									marginBottom: '1rem'
								}}>
								Sign In
							</Typography>
							<FormControl variant="outlined">
								<InputLabel htmlFor="email">Email</InputLabel>
								<OutlinedInput
									id="email"
									type="email"
									autoFocus
									fullWidth
									required
									value={email}
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormControl>

							<FormControl variant="outlined">
								<InputLabel htmlFor="password">
									Password
								</InputLabel>
								<OutlinedInput
									id="password"
									type={showPassword ? 'text' : 'password'}
									value={password}
									required
									fullWidth
									style={{
										margin: theme.spacing(1),
										width: '30ch'
									}}
									onChange={(e) =>
										setPassword(e.target.value)}
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

							<Button
								type="submit"
								variant="outlined"
								color="secondary"
								style={{
									margin: theme.spacing(1.5),
									marginTop: '1rem'
								}}>
								Sign In
							</Button>
						</form>
					</div>
				</Paper>
			</div>
		</React.Fragment>
	);
}

export default withStyles(styles)(SignInForm);
