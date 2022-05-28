import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import UserDash from './components/user-dashboard.js'

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'#EFF8FF'}}>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/user-dashboard' element={<UserDash />} /> 
    </Routes>
  </div>
  <Footer />
  </div>
  );
}

export default App;
