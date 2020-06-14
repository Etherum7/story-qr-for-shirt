import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
const styles = {
    PaperDiv:{
        display:"flex",
        marginTop: "30vh",
        flexDirection :"column",
        justifyContent:"center",
        alignItems:"center"

    },
    paperTypography:{
        display:"block"
    },
    Paper:{
        display:"flex",
        width:"auto",
        height:"auto",
        flexDirection :"column",
        justifyContent:"center",
        paddingTop:"1.5rem"
    },
   
};
function PreSignIn(props) {
	const {classes} = props;
	return (
        <div>
		<div className={classes.PaperDiv}>
			<Paper className={classes.Paper}  style={{display:"block"}}>
                
				<Typography variant="h2" gutterBottom>
					Want To Get Yours ?
				</Typography>
                
                
			</Paper>
            <Box className={classes.Paper}  style={{display:"block"}}>
                
				
                
                <div>
                
               
                </div>
			</Box>
		</div>
        </div>
	);
}

export default withStyles(styles)(PreSignIn);
