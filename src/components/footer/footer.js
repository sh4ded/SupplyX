import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from './footerStyles.css'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="../">
          SupplyX
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer() {
    return(
        <div style={{backgroundColor:'#FFB400'}}>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            <p>Hello World!</p>
        </div>
    )
}

export default Footer;