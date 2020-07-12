import {blue, green} from '@material-ui/core/colors';
import grey from '@material-ui/core/colors/grey';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const ColorButton1 = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(blue[500]),
		backgroundColor: blue[500],
		'&:hover': {
			backgroundColor: blue[700]
		},
		width: '90%',
		height: '10%',
		borderRadius: '30px',
		margin: theme.spacing(1)
	}
}))(Button);
const black1 = grey[800];
const black2 = grey[900];
const ColorButton2 = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(black1),
		backgroundColor: black1,
		'&:hover': {
			backgroundColor: black2
		},
		width: '90%',
		height: '10%',

		borderRadius: '30px',
		margin: theme.spacing(1)
	}
}))(Button);
const ColorButton3 = withStyles((theme) => ({
	root: {
		color: 'white',
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		},
		width: '100%',
		height: '90%',
		//marginLeft: '20%',
		
		borderRadius: '30px',
		margin: theme.spacing(1)
	}
}))(Button);
export {ColorButton1, ColorButton2, ColorButton3};
