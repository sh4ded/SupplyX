import React from 'react';
import Link from '@mui/material/Link';



const Home = ({token, setToken}) => {
  return (
    <div>
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
  );
};

export default Home;