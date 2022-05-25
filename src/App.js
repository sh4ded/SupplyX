import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{backgroundColor:'#EFF8FF'}}>
      <Router>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  </Router>
  </div>
  <Footer />
    </div>
  );
}

export default App;
