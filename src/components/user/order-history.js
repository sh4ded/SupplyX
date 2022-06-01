import React from 'react';
import FormRow from '../form-row.js'
import Table from './table.js'
import {useState, useEffect} from 'react'
import user from '../../services/user.js'

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
	<div style={{minHeight: '75vh', margin: '0 2rem'}}>
	
	{orders.map((x, idx) => { return (
		<>
		<br/>
		<Table key={idx} objt={x}/>
		</>) } )}
	{/*orders.map((x, idx) => { return (<FormRow key={`${idx}`} objt={x} />)} )*/}
	</div>
	)
}

export default UDHistory;