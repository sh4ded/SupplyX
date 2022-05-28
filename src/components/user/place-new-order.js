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

const UDPlace = ({vari, setVari, token, setToken, id, setId}) => {
	const [butmsg, setButmsg] = useState('Get Quote');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (butmsg[0] === 'G')
		{
			setButmsg('Place');
		}
		if (butmsg[0] === 'P')
		{
			console.log('Order placed');
			setVari(0);
		}
	}

	return(
	<>
	<br/>
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
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight (in kg)"
              name="weight"
              autoComplete="Weight"
              autoFocus
            />
            <TextField
            margin="normal"
            required
            fullWidth
          	id="products"
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
	</>
	)
}

export default UDPlace;