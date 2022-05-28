import React from 'react';

const FormRowEach = ({label,value}) => {
	return (
		<>
	<h1><b>{label} : </b>{value}</h1>
	</>
	)
}

const FormRow = ({objt}) => {
	const objectToArray = obj => {
   const keys = Object.keys(obj);
   const res = [];
   for(let i = 0; i < keys.length; i++){
      res.push(obj[keys[i]]);
   };
   return res;
};
	const ovalues = objectToArray(objt);
	const okeys = Object.keys(objt); 
	return(
	<>
	{okeys.map((x, idx) => {
		return (
			<>
			<FormRowEach label={x} value={ovalues[idx]} />
			</>)
	})}
	{//<FormRowEach label='Order Id' value={objt.order_id} />
	}</>)
}

export default FormRow;