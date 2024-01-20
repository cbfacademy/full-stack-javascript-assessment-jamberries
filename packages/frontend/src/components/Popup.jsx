import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PositionedPopper(props) {

  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm addition of actors to database?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The movies which the actors are in wil be saved to the database.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={props.handleClose}>Cancel</Button>
          <Button color="success" onClick={props.handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  );
}