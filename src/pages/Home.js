import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import styles from './homestyle.css';

const Home = ({token, setToken}) => {
  return (
    <div className="totcont">
      <div className="leftcont">
      <h1>Welcome to Supply X</h1>
      <p>Supply Chain Solutions</p>
      
      <Link href="../sign-in" variant="body2">
      {"Sign In"}
      </Link>
      <br/>
      <Link href="../sign-up" variant="body2">
      {"Create an account"}
      </Link>
      </div>
      <div className="rightcont">
        <h1>About Us</h1>
      Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non 
      proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      </div>
    </div>
  );
};

export default Home;