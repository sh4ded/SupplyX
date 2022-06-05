import React from 'react';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {useState} from 'react';
import Table from './table.js'
import user from '../../services/user.js'

const UDTrack = ({token, setToken, id, setId}) => {
	const boomer="bva"
	const top100Films = [{
		title:'Hi'},
		{
			title: 'Hello'
		}];
	   const [val,setVal]=useState({});

  		const handleClick = () => {
    setVal(top100Films[0])
 		};
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
			console.log(orderID);
			user
			.getId(orderID, {
				user_id : `${id}`,
				authorization : `bearer ${token}`
			})
			.then(response => {
				user
			.getWarehouse('hola',{
				user_id : `${id}`,
				authorization : `bearer ${token}`
			})
			.then(places => {
				console.log(places.orders.filter(obj => {
					return obj.warehouse_id === response.order[0].source
				}).location);
				setObj([{
					'Order ID': response.order[0].order_id,
					'Order Date': response.order[0].order_date.split('T')[0].split("-").reverse().join("-"),
					'Source': places.orders.filter(obj => {
					return obj.warehouse_id === response.order[0].source
				})[0].location,
					'Destination': places.orders.filter(obj => {
					return obj.warehouse_id === response.order[0].destination
				})[0].location,
					'Current Hub':places.orders.filter(obj => {
					return obj.warehouse_id === response.order[0].current_hub
				})[0].location,
					'Vehicle ID' : response.order[0].vehicle_id,
					'Weight' : response.order[0].weight,
					'Products' : response.order[0].products,
					'Amount' : response.order[0].amount,
					'Order Status' : response.order[0].status,
					'Expected Date' : response.order[0].expected_date.split('T')[0].split("-").reverse().join("-")
					}]);
				setRender(1);
			})
			.catch(err => {
				console.log(err);
			});		
			})
				.catch(error => {
				console.log(error)
				setRender(0);
			});
			setOrderID("");
		}
	}
	return(
	<div style={{minHeight: '75vh', margin: '0 2rem'}}>
	<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
	<br />
	<TextField error={error} helperText={error ? 'Invalid Order ID' : null} id="order-id" label="Enter Order ID" variant="outlined" value={orderID} onChange={handleChange}/>
	<br /><br />
	<Button variant="contained" type='submit'>Submit</Button>
	</Box>
	{/*<Autocomplete
   searchText={boomer}
   value={boomer}
    options={top100Films}
    getOptionLabel={option => option.title}
    style={{ width: 300 }}
    
    renderInput={params => (
      <TextField
        {...params}
        label="Combo box"
        variant="outlined"
        fullWidth
        value="The Legend Saravanan"

      />
    )}
  />*/}
	{
		render === 1 && obj.map((x, idx) => { return (
		<>
		<br/>
		<Table key={idx} objt={x}/>
		</>) } )}
	</div>
	)
}

export default UDTrack;