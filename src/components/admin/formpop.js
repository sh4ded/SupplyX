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
import {useNavigate} from 'react-router-dom';


export default function FormDialog({id, token, wid, did, setRefresh, refresh, wt, oid}) {
  console.log(did);
  const nav = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [vehicleid, setVehicleid] = useState();
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(0);

  const handleApprove = () => {
    console.log(vehicleid.allocated_space);
   admin.putVehicle({
      admin_id : id,
      order_id : oid,
      authorization : `bearer ${token}`,
      allocated_space : parseInt(vehicleid.allocated_space)+parseInt(wt),
      vehicle_id : vehicleid.id
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
    console.log(wt);
    admin.getVehicles({
      admin_id : id,
      authorization : `bearer ${token}`,
      warehouse_id : wid,
      destination : did
    })
    .then(response => {
      let veh = [];
      for(let i = 0; i < response.vehicles.length; i++)
      {
        veh[i] = {
          id : response.vehicles[i].vehicle_id,
          allocated_space : response.vehicles[i].allocated_space,
          name : `${response.vehicles[i].vehicle_id.toString()} (Available Space : ${parseInt(response.vehicles[i].total_space) - parseInt(response.vehicles[i].allocated_space)})`
        };
      }
      setVehicles(veh);
      console.log(veh);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const handleClose = () => {
    setOpen(false);
    setRefresh(1);
    setRender(0);
    setVehicleid();
    nav('../admin-dashboard');
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Assign Vehicle
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        {render === 0 && <>
          <DialogTitle>Assign Vehicle</DialogTitle>
        <DialogContent>
          <Autocomplete
        margin="normal"
        id="vehicle"
        required
        options={vehicles}
        renderInput={params => (
        <TextField {...params} margin="normal" fullWidth label="Vehicle ID" variant="outlined" /> )}
        getOptionLabel={option => (option.name)}
        value={vehicleid}
        onChange={(_event, newVehicleID) => {
        setVehicleid(newVehicleID);
        console.log(vehicleid.name);
        }}
        />
        </DialogContent>
        </>}
        {render === 1 && <>
          <DialogTitle>Order approved!</DialogTitle>
          </>}
          {render === 0 &&
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleApprove}>Approve</Button>
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
