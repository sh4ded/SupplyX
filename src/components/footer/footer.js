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
        <br/>
        <p>Made with ❤ at Guindy!</p>
      </Typography>
    );
  }

function Footer() {
    return(
        <div style={{backgroundColor:'#FFB400'}}>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            
        </div>
    )
}

export default Footer;