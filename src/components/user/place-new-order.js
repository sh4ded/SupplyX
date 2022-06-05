import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import Table from './table.js'
import user from '../../services/user.js'


const UDPlace = ({vari, setVari, token, setToken, id, setId}) => {
  const [places, setPlaces] = useState([]);
  const [placenames, setPlacenames] = useState([]);
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  useEffect(()=>{
    user
    .getWarehouse('hi',{
      user_id : `${id}`,
      authorization : `bearer ${token}`
    })
    .then(response => {
      //console.log(response.orders);
      setPlaces(response.orders);
      setPlacenames(places.map(a => {
        return a.location}));
      console.log(placenames);
      console.log(places)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
	const [butmsg, setButmsg] = useState('Get Quote');
  const [render, setRender] = useState(0);
  const [obj, setObj] = useState([]);
  const [fobj, setFobj] = useState([]);
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
        from_warehouse : source.warehouse_id,
        to_warehouse : destination.warehouse_id
      }
      user
      .getPrice(objc)
      .then(response => {
        console.log(response);
        setObj([{
        order_date : Date.now(),
        user_id : `${id}`,
        source : source.warehouse_id,
        destination : destination.warehouse_id,
        current_hub : source.warehouse_id,
        vehicle_id : null,
        weight : data.get('weight'),
        product : data.get('products'),
        amount : response.pricing.price_per_kg*parseInt(data.get('weight')),
        authorization : `bearer ${token}`
      }]);
        console.log(obj);
        setFobj([{
        'Source' : source.location,
        'Destination' : destination.location,
        'Net Weight' : data.get('weight'),
        'Product' : data.get('products'),
        'Amount' : response.pricing.price_per_kg*parseInt(data.get('weight'))
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
  <Autocomplete
    margin="normal"
      id="source"
      required
      options={places}
      renderInput={params => (
        <TextField {...params} margin="normal" fullWidth label="Source" variant="outlined" /> )}
      getOptionLabel={option => (option.location)}
      value={source}
      onChange={(_event, newSource) => {
    setSource(newSource);
    console.log(source);
  }}
    />
    <Autocomplete
    margin="normal"
      id="destination"
      required
      options={places}
      renderInput={params => (
        <TextField {...params} margin="normal" fullWidth label="Destination" variant="outlined" /> )}
      getOptionLabel={option => (option.location)}
      value={destination}
      onChange={(_event, newDestination) => {
    setDestination(newDestination);
    console.log(destination);
  }}
    />
            {/*<TextField
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
            />*/}
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
            render === 1 && fobj.map((x, idx) => { return (
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