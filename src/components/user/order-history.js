import React from 'react';
import FormRow from '../form-row.js'
import Table from './table.js'
import {useEffect} from 'react'
import user from '../../services/user.js'

const UDHistory = ({token, setToken, id, setId}) => {
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
		})
		.catch(error => {
			console.log(error);})
	})
	const orders = [
		{
			'order_id' : 'QW23334',
			'order_date': '24/03/2002',
			'user_id' : 'QW23334',
			'source' : 'Chennai',
			'destination' : 'Bangalore',
			'current_hub' : 'Mysore',
			'vehicle_id' : 'TN23WQ2345',
			'weight' : '234',
			'products' : 'Mysore_Sandal_Soap_Small_50;Mysore_Sandal_Soap_Large_40',
			'amount' : '2000',
			'status' : 'Pending',
			'expected_date' : null
		},
		{
			'order_id' : 'QW23335',
			'order_date': '24/03/2002',
			'user_id' : 'QW23334',
			'source' : 'Chennai',
			'destination' : 'Bangalore',
			'current_hub' : 'Mysore',
			'vehicle_id' : 'TN23WQ2345',
			'weight' : '234',
			'products' : 'Mysore_Sandal_Soap_Small_50;Mysore_Sandal_Soap_Large_40',
			'amount' : '2000',
			'status' : 'Approved',
			'expected_date' : '27/03/2002'
		}
	]
	return(
	<>
	
	{orders.map((x, idx) => { return (
		<>
		<br/>
		<Table key={idx} objt={x}/>
		</>) } )}
	{/*orders.map((x, idx) => { return (<FormRow key={`${idx}`} objt={x} />)} )*/}
	</>
	)
}

export default UDHistory;