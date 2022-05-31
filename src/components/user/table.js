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

export default function BasicTable({objt}) {
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
  var rows = []
  for(let i = 0; i < okeys.length; i++){
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