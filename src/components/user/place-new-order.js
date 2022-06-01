import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import Table from './table.js'
import user from '../../services/user.js'


const UDPlace = ({vari, setVari, token, setToken, id, setId}) => {
	const [butmsg, setButmsg] = useState('Get Quote');
  const [render, setRender] = useState(0);
  const [obj, setObj] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (butmsg[0] === 'G')
		{

			setButmsg('Place');
      setRender(1);
      const data = new FormData(e.currentTarget);
      const objc = {
        authorization : `bearer ${token}`,
        id : `${id}`,
        from_warehouse : data.get('source'),
        to_warehouse : data.get('destination')
      }
      user
      .getPrice(objc)
      .then(response => {
        console.log(response);
        setObj([{
        order_id : 'QW1345',
        order_date : Date.now(),
        user_id : `${id}`,
        source : data.get('source'),
        destination : data.get('destination'),
        current_hub : data.get('source'),
        vehicle_id : null,
        weight : data.get('weight'),
        product : data.get('products'),
        amount : response.pricing.price_per_kg*parseInt(data.get('weight')),
        authorization : `bearer ${token}`
      }]);
      })
      .catch(error => {
        console.log(error);
      })
      
		}
		if (butmsg[0] === 'P')
		{
      console.log(obj);
      user
      .placeOrder(obj[0])
      .then(response => {
        console.log(response);
        console.log('Order placed');
      setRender(2);
      setTimeout(() => {
        setVari(0);
      }, 2000);
      })
      .catch(error => {
        console.log(error);
      })
			
		}
	}

	return(
	<div style={{minHeight: '75vh', margin: '0 2rem'}}>
	<br/>
  {render === 0 && <>
	<Typography component="h1" variant="h5">
            New Order
    </Typography>
	<Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="source"
              label="Source"
              name="source"
              autoComplete="Source"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="destination"
              label="Destination"
              name="destination"
              autoComplete="Destination"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight (in kg)"
              name="weight"
              autoComplete="Weight"
            />
            <TextField
            margin="normal"
            required
            fullWidth
          	id="products"
            name="products"
          	label="Product Description"
          	multiline
          	maxRows={4}
        	/>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {butmsg}
            </Button>
          </Box>
          </>}
          {
            render === 1 && obj.map((x, idx) => { return (
    <>
    <br/>
    <Table key={idx} objt={x}/>
    </>) } )}
    {render === 1 && 
        <Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }}>
    <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {butmsg}
            </Button>
            </Box>}
            {render === 2 && <h1>
              Order placed Successfully!
              </h1>}
	</div>
	)
}

export default UDPlace;