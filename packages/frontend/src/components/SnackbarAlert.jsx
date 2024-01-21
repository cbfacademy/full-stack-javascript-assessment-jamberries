import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

/**
 * Component to show alert on database success
 * @component
 * @param {object} props The response details
 * @returns {ReactComponentElement} Snackbar alert popup
 */
export default function SnackbarAlert(props) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpenSnack(false);
  };

  return (
    <div>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          // severity={ props.dbmessage === "success" ? 'success' : 'warning'}
          severity='warning'
          variant="filled"
          sx={{ width: '100%' }}
        >
            {/* { props.dbmessage === "success" ? 'Success! Your actors and films were added to the database!' : 'Update failed! Try again later.'} */}
          This Page is under construction <EngineeringOutlinedIcon/>
        </Alert>
      </Snackbar>
    </div>
  );
}