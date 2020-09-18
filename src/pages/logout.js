import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: "#bbdefb",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Logout = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  function redirect () {
    localStorage.clear()
    window.location.href = '/login'
    return 
  }

  setInterval(redirect, 5000)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Loguot Success <CheckCircleOutlinedIcon/></h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Logout