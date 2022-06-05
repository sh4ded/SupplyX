import React from 'react';
import FormRow from '../form-row.js'
import Accordion from './accordion.js'
import {useState, useEffect} from 'react'
import user from '../../services/user.js'
import Typography from '@mui/material/Typography';


const UDHistory = ({token, setToken, id, setId}) => {
	const [orders,setOrders] = useState([]);
	useEffect(() => {
		const obj = {
			authorization : `bearer ${token}`,
    		user_id : id
		};
		console.log(obj);
		user
		.getAll(obj)
		.then(response => {
			setOrders(response.orders);
			console.log(response);
		})
		.catch(error => {
			console.log(error);})
	}, [])
	return(
	<div style={{minHeight: '75vh', margin: '30px 2rem'}}>
	<Typography component="h1" variant="h5">
            Your Order History
    </Typography>
	{orders.map((x, idx) => { return (
		<>
		<br/>
		<Accordion key={idx} objt={x} token={token} id={id} />
		</>) } )}
	{/*orders.map((x, idx) => { return (<FormRow key={`${idx}`} objt={x} />)} )*/}
	</div>
	)
}

export default UDHistory;