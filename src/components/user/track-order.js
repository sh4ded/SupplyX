import React from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {useState} from 'react';

const UDTrack = () => {
	const [orderID, setOrderID] = useState("");
	const [error, setError] = useState(false);

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
			console.log(orderID);
			setOrderID("");
		}
	}
	return(
	<>
	<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
	<br />
	<TextField error={error} helperText={error ? 'Invalid Order ID' : null} id="order-id" label="Enter Order ID" variant="outlined" value={orderID} onChange={handleChange}/>
	<br /><br />
	<Button variant="contained" type='submit'>Submit</Button>
	</Box>
	</>
	)
}

export default UDTrack;