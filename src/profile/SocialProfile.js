import React, {useState} from 'react';
import NavBar from '../layout/NavBar';
import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles, useTheme} from '@material-ui/core/styles';
const styles = {
	root: {
		display: 'flex',
		scroll: 'true',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	paperEnclosingForm: {
		width: '80%',
		display: 'flex',

		marginTop: '1rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90%'
	},
	socialForm: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems: 'center',
		width: '70%'
	}
};

function SocialProfile(props) {
	const {classes} = props;
	const [
		name,
		setName
	] = useState('');
	const [
		dobExpression,
		setDobExpression
	] = useState('');
	const [
		quote,
		setQuote
	] = useState('');
	const [
		hobbies,
		setHobbies
	] = useState('');
	const [
		loveLife,
		setLoveLife
	] = useState('');
	const [
		aspirations,
		setAspirations
	] = useState('');
	const [
		professionalDetails,
		setProfessionalDetails
	] = useState('');
	const [
		instagramHandle,
		setInstagramHandle
	] = useState('');
	const [
		twitterHandle,
		setTwitterHandle
	] = useState('');
	const [
		tinderHandle,
		setTinderHandle
	] = useState('');
	const [
		mobileNumber,
		setMobileNumber
	] = useState('');
	const [
		facebookHandle,
		setFacebookHandle
	] = useState('');
	const [
		githubHandle,
		setGithubHandle
	] = useState('');

	const theme = useTheme();
	return (
		<div className={classes.root}>
			<div style={{width: '100%'}}>
				<NavBar />
			</div>

			<Paper className={classes.paperEnclosingForm}>
				<Typography variant="h3">SOCIAL</Typography>
				<form className={classes.socialForm}>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1), width: '40%'}}
						variant="outlined">
						<InputLabel htmlFor="name">
							What name do you want to display?
						</InputLabel>
						<OutlinedInput
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							labelWidth={250}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="DOB expression">
							Write something that signifies your date of birth
						</InputLabel>
						<OutlinedInput
							id="DOB expression"
							multiline
							color="primary"
							value={dobExpression}
							onChange={(e) => setDobExpression(e.target.value)}
							labelWidth={340}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor=" quote">
							Which quote describes or inspires you? (that is
							something you would write on your insta bio)
						</InputLabel>
						<OutlinedInput
							id=" quote"
							multiline
							value={quote}
							onChange={(e) => setQuote(e.target.value)}
							labelWidth={660}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="hobbies">
							What are your Intrests And Hobbies that make you
							proud?
						</InputLabel>
						<OutlinedInput
							id=" hobbies"
							multiline
							value={hobbies}
							onChange={(e) => setHobbies(e.target.value)}
							labelWidth={415}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="loveLife">
							How is your love life ? What do you expect from your
							partner?
						</InputLabel>
						<OutlinedInput
							id=" loveLife"
							multiline
							value={loveLife}
							onChange={(e) => setLoveLife(e.target.value)}
							labelWidth={440}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="aspirations">
							What are your aspirations from future? Where do you
							see yourself in 5 years?
						</InputLabel>
						<OutlinedInput
							id=" aspirations"
							multiline
							value={aspirations}
							onChange={(e) => setAspirations(e.target.value)}
							labelWidth={550}
						/>
					</FormControl>
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="professionalDetails">
							Some Professional Details of yourself at current
							point in time
						</InputLabel>
						<OutlinedInput
							id=" professionalDetails"
							multiline
							value={professionalDetails}
							onChange={(e) =>
								setProfessionalDetails(e.target.value)}
							labelWidth={440}
						/>
					</FormControl>
					{/* Very Important part Mobile Number */}
					<FormControl
						fullWidth
						style={{margin: theme.spacing(1)}}
						variant="outlined">
						<InputLabel htmlFor="mobileNumber">
							Type in your mobile number with country code (if you
							want to show)
						</InputLabel>
						<OutlinedInput
							id="mobileNumber "
							value={mobileNumber}
							onChange={(e) => setMobileNumber(e.target.value)}
							labelWidth={485}
						/>
					</FormControl>
					<div>
						<FormControl
							style={{margin: theme.spacing(1)}}
							variant="outlined">
							<InputLabel htmlFor="instagram">
								Your Instagram Username
							</InputLabel>
							<OutlinedInput
								id="instagramHandle "
								value={instagramHandle}
								onChange={(e) =>
									setInstagramHandle(e.target.value)}
								labelWidth={185}
							/>
						</FormControl>
						<FormControl
							style={{margin: theme.spacing(1)}}
							variant="outlined">
							<InputLabel htmlFor="twitterHandle">
								Your Twitter Username
							</InputLabel>
							<OutlinedInput
								id="twitterHandle"
								value={twitterHandle}
								onChange={(e) =>
									setTwitterHandle(e.target.value)}
								labelWidth={165}
							/>
						</FormControl>
						<FormControl
							style={{margin: theme.spacing(1)}}
							variant="outlined">
							<InputLabel htmlFor="tinderHandle">
								Your Tinder Username
							</InputLabel>
							<OutlinedInput
								id="tinderHandle"
								value={tinderHandle}
								onChange={(e) =>
									setTinderHandle(e.target.value)}
								labelWidth={160}
							/>
						</FormControl>
						<FormControl
							style={{margin: theme.spacing(1)}}
							variant="outlined">
							<InputLabel htmlFor="facebookHandle">
								Your Facebook Username
							</InputLabel>
							<OutlinedInput
								id="facebookHandle"
								value={facebookHandle}
								onChange={(e) =>
									setFacebookHandle(e.target.value)}
								labelWidth={185}
							/>
						</FormControl>
						<FormControl
							style={{margin: theme.spacing(1)}}
							variant="outlined">
							<InputLabel htmlFor="githubHandle">
								Your Github Username
							</InputLabel>
							<OutlinedInput
								id="githubHandle"
								value={githubHandle}
								onChange={(e) =>
									setGithubHandle(e.target.value)}
								labelWidth={160}
							/>
						</FormControl>
					</div>
				</form>
			</Paper>
		</div>
	);
}
export default withStyles(styles)(SocialProfile);
