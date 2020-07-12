const styles = {
	root: {
		display: 'flex',
		height: '100vh',
		flexDirection:"column",
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	paperOutclosingForm: {
		width: '80%',
		display: 'flex',
		marginTop: '1rem',
		flexDirection: 'column',

		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '90%'
	},
	professionalForm: {
		display: 'flex',
		justifyContent: 'flex-start',
		
		alignItems: 'center',
		//left:0,
		//position:"relative",
		width: '60%',
		height: '90%'
	},
	formAndPreview:{
	  width:"95vw",
	  height:"90%",
	  display:"flex",
	  justifyContent:"flex-start",
	  alignItems:"center"
	},
	buttons: {
		display: 'flex',
		justifyContent: 'space-between',

		alignItems: 'center'
	},
	stepper: {
		maxWidth: '50%',
		flexGrow: 1
	}
};
export default styles;
