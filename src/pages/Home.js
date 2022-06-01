import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import styles from './homestyle.css';
import Navbar from '../components/navbar/navbar.js'

const Home = ({token, setToken}) => {
  const pages = ['Sign In', 'Sign Up'];
  return (
    <>
    <Navbar pages={pages} condition={1}/>
    <div className="totcont">
      <div>
      <h1>Welcome to Supply X</h1>
      <div className="leftcont">
      <h2>The Network Map.
The brains behind your freight.</h2>

<p className="homep"> With eyes on thousands of transporters,
 millions of transactions and billions
  of dollars of freight globally, drive
   better decisions here and now. </p></div>
      <div className="rightcont">
        <h2>Integrating all modes</h2>
        <p className="homep">SupplyX's comprehensive platform design
        accounts for all modes locations, locations and movements
        so you can focus on optimizing</p>
      </div>
      <br/><br/>
      <Link href="../sign-in" variant="body2" style={{fontSize: '1.2rem'}}>
      {"Sign In"}
      </Link>
      <br/>
      <Link href="../sign-up" variant="body2" style={{fontSize: '1.2rem'}}>
      {"Create an account"}
      </Link>
      </div>
      <div className="aboutus">
        <h1>About Us</h1><p className="homep">
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
      mollit anim id est laborum.</p>
      </div>
    </div>
    </>
  );
};

export default Home;