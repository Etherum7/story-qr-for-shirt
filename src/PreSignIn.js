import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
const styles = {
	PaperDiv: {
		display: 'flex',
		marginTop: '30vh',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	paperTypography: {
		display: 'block'
	},
	Paper: {
		display: 'flex',
		width: 'auto',
		height: 'auto',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '1.5rem '
	}
};
function PreSignIn(props) {
	const {classes} = props;
	return (
		<div>
			<div className={classes.PaperDiv}>
				<Paper className={classes.Paper} style={{display: 'block'}}>
					<Typography variant="h2" gutterBottom>
						Want To Get Yours ?
					</Typography>
					<Box>
						<Button
							variant="contained"
							color="primary"
							style={{marginRight: '0.5rem'}}>
							LOGIN
						</Button>
						<Button variant="contained" color="secondary">
							SIGN UP
						</Button>
					</Box>
				</Paper>
			</div>
		</div>
	);
}

export default withStyles(styles)(PreSignIn);
