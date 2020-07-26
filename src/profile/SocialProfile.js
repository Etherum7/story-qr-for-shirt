import React, {useState} from 'react';
import styles from '../styles/socialProfileStyles'
//import axios from 'axios';
import DragAndDrop from '../resources/DragAndDrop'
import NavBar from '../components/NavBar';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {withStyles, useTheme} from '@material-ui/core/styles';

function SocialProfile(props) {
	const {classes} = props;
	const theme = useTheme();

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

	const [
		element,
		setElement
	] = useState(0);
	const [
		photo,
		setPhoto
	] = useState(null);
	const handleNext = () => {
		if (element < 9) {
			setElement(element + 1);
		}
	};
	

	const handleBack = () => {
		if (element > 0) {
			setElement(element - 1);
		}
	};

  const checkFileSize=(event)=>{
     let files = event.target.files
     let size = 1000000 
     let err = ""; 
    
     if (files[0].size > size) {
      err += files[0].type+'is too large, please pick a smaller file\n';
    }
  
  if (err !== '') {
     event.target.value = null
     console.log(err)
     return false
}

return true;

}
 const checkFileSizeDrop=(file)=>{
    
     let size = 1000000 
     let err = ""; 
     
  
    if(file[0].size> size){
		err += file[0].type+'is too large, please pick a smaller file\n';
	}
  if (err !== '') {
     file = null
     console.log(err)
     return false
}

return true;

}
  const checkMimeType=(event)=>{
  //getting file object
  let files = event.target.files  
  //define message container
  let err = ''
  // list allow mime type
 const types = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
  // loop access array

   // compare file type find doesn't matach
       if (types.every(type => files[0].type !== type)) {
       // create error message and assign to container   
       err += files[0].type+' is not a supported format\n';
     }
 
   if (err !== '') { // if message not same old that mean has error 
     event.target.value= null // discard selected file
      console.log(err)
       return false; 
  }
 return true;

}
	
    const checkMimeTypeDrop=(file)=>{
  
  let err = ''
 
 const types = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
 

if (types.every(type => file[0].type !== type)){
	// create error message and assign to container   
	err += file[0].type+' is not a supported format\n';
}
 if (err !== '') { // if message not same old that mean has error 
     file= null // discard selected file
      console.log(err)
       return false; 
  }
 return true;

}
const handleDrop = (file) => {
	 if(checkMimeTypeDrop(file) && checkFileSizeDrop(file))
	  setPhoto(file[0])  
  }

  const handleFileUpload=(event)=>{
	  if(checkMimeType(event) && checkFileSize(event))
	  setPhoto(event.target.files[0])

  }
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log({name, twitterHandle,mobileNumber,instagramHandle,facebookHandle,githubHandle, photo, loveLife});
	};
		
		const array = [
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1), width: '50%'}}
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
			</Paper>,

			<Paper className={classes.paperOutclosingForm}>
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
			</Paper>,

			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor=" quote">
						Which quote describes or inspires you? 
					</InputLabel>
				{/* (that is
					something you would write on your insta bio) */}
					<OutlinedInput
						id=" quote"
						multiline
						//style={{width:}}
						value={quote}
						onChange={(e) => setQuote(e.target.value)}
						labelWidth={280}
					/>
				</FormControl>
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor="hobbies">
						What are your Intrests And Hobbies that make you proud?
					</InputLabel>
					<OutlinedInput
						id=" hobbies"
						multiline
						value={hobbies}
						onChange={(e) => setHobbies(e.target.value)}
						labelWidth={415}
					/>
				</FormControl>
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
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
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor="aspirations">
						What are your aspirations from future? Where do you see
						yourself in 5 years?
					</InputLabel>
					<OutlinedInput
						id=" aspirations"
						multiline
						value={aspirations}
						onChange={(e) => setAspirations(e.target.value)}
						labelWidth={550}
					/>
				</FormControl>
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor="professionalDetails">
						Some Professional Details of yourself at current point
						in time
					</InputLabel>
					<OutlinedInput
						id=" professionalDetails"
						multiline
						value={professionalDetails}
						onChange={(e) => setProfessionalDetails(e.target.value)}
						labelWidth={440}
					/>
				</FormControl>
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
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
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					fullWidth
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor="photo">
						Upload an image if you want
					</InputLabel>
					<DragAndDrop handleDrop={handleDrop}>
					<div style={{height: 300, width: 250}}>
						<input type="file"  
						onChange={handleFileUpload}
						/>
						
					</div>
					</DragAndDrop>
					
					{/* <input
						type="file"
						accept="image/*"
						onChange={(event) => setPhoto(event.target.files)}
						id=" photo"
					/> */}
                    
					{/* <FileManager files={photo}>{uploadFiles}</FileManager> */}
				</FormControl>
			</Paper>,
			<Paper className={classes.paperOutclosingForm}>
				<FormControl
					style={{margin: theme.spacing(1)}}
					variant="outlined">
					<InputLabel htmlFor="instagram">
						Your Instagram Username
					</InputLabel>
					<OutlinedInput
						id="instagramHandle "
						value={instagramHandle}
						onChange={(e) => setInstagramHandle(e.target.value)}
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
						onChange={(e) => setTwitterHandle(e.target.value)}
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
						onChange={(e) => setTinderHandle(e.target.value)}
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
						onChange={(e) => setFacebookHandle(e.target.value)}
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
						onChange={(e) => setGithubHandle(e.target.value)}
						labelWidth={160}
					/>
				</FormControl>
			</Paper>
		];

		return (
			<div className={classes.root}>
				<div style={{width: '100%'}}>
					<NavBar />
				</div>
				<Typography variant="h3">SOCIAL</Typography>
				<div className={classes.formAndPreview}>
				<form className={classes.socialForm} onSubmit={handleSubmit}>
					{array[element]}
					{ (element===9) ? <Button
							type="submit"
							variant="outlined"
							color="secondary">
							SUBMIT
				 		</Button> : <></> 
							}
				</form>
				</div>
				<MobileStepper
					variant="progress"
					steps={10}
					position="static"
					activeStep={element}
					style={{width: '50%'}}
					//className={classes.stepper}
					nextButton={
						<Button
							variant="contained"
							size="small"
							onClick={handleNext}
							disabled={element === 9}>
							Next
							{theme.direction === 'rtl' ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							variant="contained"
							size="small"
							onClick={handleBack}
							disabled={element === 0}>
							{theme.direction === 'rtl' ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</div>
		);
}


export default withStyles(styles)(SocialProfile);
