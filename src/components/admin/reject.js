import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from 'react';
import admin from '../../services/admin.js';


export default function FormDialog({id, token, wid, setRefresh, refresh, wt, oid}) {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(0);

  const handleYes = () => {
    admin.rejectOrder({
      admin_id : id,
      order_id : oid,
      authorization : `bearer ${token}`,
    })
   .then(response => {
    console.log(response);
   })
   .catch(err => {
    console.log(err);
   });
   setRender(1);
   /*console.log({
      admin_id : id,
      authorization : `bearer ${token}`,
      allocated_space : parseInt(vehicleid.allocated_space)+parseInt(wt),
      vehicle_id : vehicleid.id
    });*/
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRefresh(1);
    setRender(0);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} color="error">
        Reject Order
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        {render === 0 && <>
          <DialogTitle>Are you sure?</DialogTitle>
        </>}
        {render === 1 && <>
          <DialogTitle>Order rejected!</DialogTitle>
          </>}
          {render === 0 &&
        <DialogActions>
          <Button onClick={handleYes}>Yes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>}
        {
          render === 1 && <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
        }
      </Dialog>
    </div>
  );
}
