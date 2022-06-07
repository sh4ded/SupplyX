import React from 'react';
import {useState, useEffect} from 'react';
import admin from '../../services/admin.js';
import Accordion from './accordion.js';
import Typography from '@mui/material/Typography';

const ADPending = ({token, setToken, id, setId, wid, setWid}) => {
	const [obj, setObj] = useState([]);
	const [refresh, setRefresh] = useState(0);
	useEffect(() => {
		admin.getPendingOrders({
			admin_id : id,
			authorization : `bearer ${token}`
		})
		.then(response => {
			setObj(response.orders);
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		})
	}, [refresh]);
	return (
	<div style={{minHeight: '75vh', margin: '30px 2rem'}}>
		<Typography component="h1" variant="h5">
            Pending Orders
    	</Typography>
    	<br/>
	{obj.map(x => { return (
		<>
		<Accordion key={x.order_id} objt={x} token={token} id={id} wid={wid} refresh={refresh} setRefresh={setRefresh}/>
		</>)})}
	</div>)
}

export default ADPending;