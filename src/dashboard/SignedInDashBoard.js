import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
const styles = {
	root            : {
		minHeight       : '100vh',
		display         : 'flex',
		flexGrow        : 1,
		alignItems      : 'center',
		backgroundColor : '#dc6827',
		justifyContent  : 'center'
	},
	Paper           : {
		display         : 'flex',

		marginTop       : '1rem',
		alignItems      : 'center',
		backgroundColor : '#aaee',
		justifyContent  : 'center',
		height          : '100vh',
		width           : '60%'
	},
	question        : {
		marginTop : '3%',
		boxShadow : 'none'
	},
	mainGrid        : {
		height : '90%',
		width  : '80%'
	},
	cardContainer   : {
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	card            : {
		maxWidth  : 345,
		height    : '80%',
		position  : 'relative',
		marginTop : '2rem'
	},
	media           : {
		height : 140
	},
	buttonContainer : {
		diplay         : 'flex',
		justifyContent : 'center',
		alignItems     : 'center'
	}
};

function SignedInDashBoard(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<Container className={classes.root} maxWidth="lg">
				<Paper className={classes.Paper}>
					<Grid container spacing={2} className={classes.mainGrid}>
						<Grid item xs={12} style={{ height: '10%' }}>
							<Paper className={classes.question}>
								<Typography
									variant="h3"
									style={{ textAlign: 'center' }}>
									What Profile would you like to show on your
									QR?
								</Typography>
							</Paper>
						</Grid>

						<Grid item xs={6} className={classes.cardContainer}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWfXzI3OFihFRSYneITlrPJ-2mwOWj3enFqsVN-Oj3wdHhMTAl&usqp=CAU"
									title="Social Group Photo"
								/>
								<CardActions
									className={classes.buttonContainer}>
									
									<Link to="123/create/social">
										<Button
											variant="outlined"
											color="primary">
											SOCIAL
										</Button>
									</Link>
								</CardActions>

								<CardContent>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p">
										Lizards are a widespread group of
										squamate reptiles, with over 6,000
										species, ranging across all continents
										except Antarctica
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6} className={classes.cardContainer}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPVgQe6iWl_Bc5HfRi3LEsxA0cRo2lWsDGhn6gDUE14OdoXla&usqp=CAU"
									title="Proffesional Group Photo"
								/>
								<CardActions
									className={classes.buttonContainer}>
									<Link to="/123/create/professional">
										<Button
											variant="outlined"
											color="secondary">
											PROFESSIONAL
										</Button>
									</Link>
								</CardActions>

								<CardContent>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p">
										Lizards are a widespread group of
										squamate reptiles, with over 6,000
										species, ranging across all continents
										except Antarctica
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</React.Fragment>
	);
}

export default withStyles(styles)(SignedInDashBoard);
