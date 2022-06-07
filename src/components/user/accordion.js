import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from 'react';
import user from '../../services/user.js';

export default function BasicTable({objt, token, id}) {
  const [objtt, setObjtt] = useState([]);
  const objectToArray = obj => {
   const keys = Object.keys(obj);
   const res = [];
   for(let i = 0; i < keys.length; i++){
      res.push(obj[keys[i]]);
   };
   return res;
};
  console.log(objt);
  useEffect(() => {
user
  .getWarehouse('hi', {
    user_id : `${id}`,
    authorization : `bearer ${token}`
  })
  .then(places => {
    setObjtt({
        'Order ID' : objt.order_id,
        'Order Date' : objt.order_date.split('T')[0].split("-").reverse().join("-"),
        'Source' : places.orders.filter(obj => {
          return obj.warehouse_id === objt.source
        })[0].location,
        'Destination' : places.orders.filter(obj => {
          return obj.warehouse_id === objt.destination
        })[0].location,
        'Current Hub' : places.orders.filter(obj => {
          return obj.warehouse_id === objt.current_hub
        })[0].location,
        //'Vehicle ID' : objt.vehicle_id,
        'Weight' : objt.weight,
        'Products' : objt.products,
        'Amount' : objt.amount,
        'Status' : objt.status,
        'Expected Delivery Date' : `${objt.expected_date === null ? "" : objt.expected_date.split('T')[0].split("-").reverse().join("-")}`
      });
  })
  .catch(err => {
    console.log(err);
  });
  }, []);
  const ovalues = objectToArray(objtt);
  const okeys = Object.keys(objtt);
  var rows = []
  for(let i = 1; i < okeys.length; i++){
    rows.push([okeys[i],ovalues[i]])
  }
  console.log(rows)
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{okeys[0]} : {ovalues[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/*<TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>*/}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    
  );
}