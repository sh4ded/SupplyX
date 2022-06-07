import React from 'react';
import Navbar from './navbar/navbar.js'
//import { Route, Routes } from 'react-router-dom';
import ADHome from './admin/home.js'
import ADPending from './admin/pending-orders.js'
import ADStatus from './admin/update-status.js'
import ADHistory from './admin/order-history.js'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const AdminDash = ({token, setToken, id, setId, wid, setWid}) => {
	const pages = ['Pending Orders', 'Update Status', 'Order History'];
	const navigate = useNavigate();
	useEffect(() => {
  	const unloadCallback = (event) => {
    	event.preventDefault();
    	event.returnValue = "";
    return "";
  	};

  	window.addEventListener("beforeunload", unloadCallback);
  	return () => window.removeEventListener("beforeunload", unloadCallback);
	}, []);
	useEffect(() => {
		if (token === "")
		{
			navigate('../');
		}
	})
	const [vari, setVari] = useState(0);
	return(
		<>
		<Navbar pages={pages} vari={vari} setVari={setVari} token={token} setToken={setToken} id={id} setId={setId} condition={0}/>
		{vari === 0 && <ADHome token={token} setToken={setToken} id={id} setId={setId}/>}
		{vari === 1 && <ADPending token={token} setToken={setToken} id={id} setId={setId} wid={wid} setWid={setWid} />}
		{vari === 2 && <ADStatus token={token} setToken={setToken} id={id} setId={setId} vari={vari} setVari={setVari} wid={wid} setWid={setWid}/>}
		{vari === 3 && <ADHistory token={token} setToken={setToken} id={id} setId={setId}/>}
      		{/*<Routes>
    			<Route path='/' element={<UDHome />} />
    			<Route path='/your-orders' element={<UDOrders />} />
    			<Route path='/place-new-order' element={<UDPlace />} />
    			<Route path='/order-history' element={<UDHistory />} /> 
    			<Route path='/track-order' element={<UDTrack />} /> 
    		</Routes>*/}
		</>)
}

export default AdminDash;