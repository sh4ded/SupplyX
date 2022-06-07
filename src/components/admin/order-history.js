import React from 'react';
import FormRow from '../form-row.js'
import Accordion from '../user/accordion.js'
import {useState, useEffect} from 'react'
import admin from '../../services/admin.js'
import Typography from '@mui/material/Typography';


const ADHistory = ({token, setToken, id, setId}) => {
	const [orders,setOrders] = useState([]);
	useEffect(() => {
		const obj = {
			authorization : `bearer ${token}`,
    		admin_id : id
		};
		console.log(obj);
		admin
		.getOrderHistory(obj)
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
            Warehouse Order History
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

export default ADHistory;