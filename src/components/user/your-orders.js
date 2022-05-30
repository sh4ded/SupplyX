import React from 'react';
import FormRow from '../form-row.js'
import Table from './table.js'
import {useState, useEffect} from 'react'
import user from '../../services/user.js'

const UDOrders = ({token, setToken, id, setId}) => {
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
			console.log(response);
			setOrders(response.orders);
		})
		.catch(error => {
			console.log(error);})
	})
	
	return(
	<>
	{orders.map((x, idx) => { return (
		<>
		<br/>
		<Table key={idx} objt={x}/>
		</>) } )}
	</>
	)
}

export default UDOrders;