import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { ColorButton1, ColorButton3 } from '../styles/ColorButton';
import SignUpForm from './SignUpForm';
import FacebookIcon from '@material-ui/icons/Facebook';
import googleIcon from '../components/google-icon.svg';

import Typography from '@material-ui/core/Typography';
import styles from '../styles/SigningInUpPageStyles';
import { Link } from 'react-router-dom';
// Database
import firebase, { db } from '../config/fbconfig';
function SignUpPage(props) {
	const { classes } = props;
	const theme = useTheme();
	const [ value, setValue ] = useState(0);

	const setValue1 = () => {
		setValue(1);
	};
	const handleGoogle = () => {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(function(result) {
					// This gives you a Google Access Token. You can use it to access the Google API.
					//var token = result.credential.accessToken;
					// The signed-in user info.
					var user = result.user;

					db.collection('users').doc(user.uid).set({ username: user.displayName });

					db.collection('users').doc(user.uid).get().then(function(result) {
						props.history.push(`/${result.data().username}`);
					});
					// ...
				})
				.catch(function(error) {
					// Handle Errors here.
					// var errorCode = error.code;
					// //console.log(errorCode);
					// var errorMessage = error.message;
					// // The email of the user's account used.
					// var email = error.email;
					// // The firebase.auth.AuthCredential type that was used.
					// var credential = error.credential;
					// ...
				});
		});
	};
	const handleFacebook = () => {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
			var provider = new firebase.auth.FacebookAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(function(result) {
					// This gives you a Facebook Access Token. You can use it to access the Facebook API.
					//var token = result.credential.accessToken;
					// The signed-in user info.
					var user = result.user;
					// ...
					db.collection('users').doc(user.uid).set({ username: user.displayName });

				
				})
				.catch(function(error) {
					// Handle Errors here.
					// var errorCode = error.code;
					// var errorMessage = error.message;
					// // The email of the user's account used.
					// var email = error.email;
					// // The firebase.auth.AuthCredential type that was used.
					// var credential = error.credential;
					// ...
				});
		});
	};

	return (
		<React.Fragment>
			{value === 0 ? (
				<React.Fragment>
					<div className={classes.root}>
						<div className={classes.logo}>
							<Typography variant="h3" className={classes.brandName}>
								QR For Shirt
							</Typography>
						</div>
						<div className={classes.SignUpHeader}>
							<Typography variant="h5">To Continue Sign Up</Typography>
						</div>
						<div style={{ width: '40%', height: '80vh' }}>
							<ColorButton1
								variant="contained"
								color="primary"
								// onClick={setValue1}
								onClick={handleGoogle}>
								<img
									src={googleIcon}
									alt="googleIcon"
									style={{
										width           : '6%',
										height          : '100%',
										marginRight     : '1rem',
										padding         : '0.2rem',
										backgroundColor : 'white',
										borderRadius    : '50%'
									}}
								/>
								CONTINUE WITH GOOGLE
							</ColorButton1>

							<Button
								variant="outlined"
								style={{
									margin       : theme.spacing(1),
									width        : '90%',
									borderRadius : '30px',
									height       : '10%'
								}}
								onClick={setValue1}>
								SIGN UP WITH EMAIL AND PASSWORD
							</Button>
							<Button
								variant="contained"
								color="primary"
								style={{
									margin       : theme.spacing(1),
									width        : '90%',
									borderRadius : '30px',
									height       : '10%'
								}}
								onClick={handleFacebook}>
								<FacebookIcon style={{ paddingRight: '1rem' }} />
								CONTINUE WITH FACEBOOK
							</Button>

							<hr />
							<div className={classes.anotherMethod}>
								<Typography variant="h6" style={{ width: '50%' }}>
									Already Registered
								</Typography>
								<Link
									to="/signin"
									style={{
										textDecoration : 'none',
										color          : 'white',
										width          : '40%'
									}}>
									<ColorButton3 variant="contained">Log In</ColorButton3>
								</Link>
							</div>
						</div>
					</div>
				</React.Fragment>
			) : (
				<SignUpForm history={props.history} />
			)}
		</React.Fragment>
	);
}
export default withStyles(styles)(SignUpPage);
