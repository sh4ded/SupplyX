import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {useState} from 'react';
import Table from '../user/table.js'
import admin from '../../services/admin.js'

const ADStatus = ({token, setToken, id, setId, wid, setWid}) => {
	const [orderID, setOrderID] = useState("");
	const [error, setError] = useState(false);
	const [obj, setObj] = useState([]);
	const [render, setRender] = useState(0);

	const handleChange = (e) => {
		setOrderID(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (orderID === "")
		{
			setError(true);
			setTimeout(() => {
    		setError(false);
  			}, 1000);	
		}
		else{
			const obj = {
				admin_id : id,
				authorization : `bearer ${token}`
			}
			admin.getId(orderID,obj)
			.then(response => {
				console.log(wid);
				console.log(response.order);
				if (response.order[0].destination === wid)
				{
					response.order[0].status = 'delivered';
				}
				response.order[0].current_hub = wid;
				console.log(response.order);
				admin.updateStatus({
					admin_id : id,
					authorization : `bearer ${token}`,
					order_id : response.order[0].order_id,
					status : response.order[0].status,
					warehouse_id : response.order[0].current_hub
				})
				.then(res => {
					console.log(res);
					setRender(1);
				})
				.catch(error => {
					console.log(error);
				})
			})
			.catch(err => {
				console.log(err);
			});
		}
	}
	return(
	<div style={{minHeight: '75vh', margin: '0 2rem'}}>
	{render === 0 && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
	<br />
	<Typography component="h1" variant="h5">
            Update Order Status
    </Typography>
    <br />
	<TextField error={error} helperText={error ? 'Invalid Order ID' : null} id="order-id" label="Enter Order ID" variant="outlined" value={orderID} onChange={handleChange}/>
	<br /><br />
	<Button variant="contained" type='submit'>Submit</Button>
	</Box>}
	{render === 1 && <>
		<h1>Order Status Updated Successfully</h1>
		</>}
	</div>
	)
}

export default ADStatus;