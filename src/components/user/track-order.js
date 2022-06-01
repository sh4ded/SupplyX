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
				console.log(response.order)
				setObj([response.order[0]])
				setRender(1);
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