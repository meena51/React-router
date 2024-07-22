import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar'
import Order from './components/Order';
import Nomatch from './components/Nomatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import User from './components/User';
import UseDetails from './components/UseDetails';
import Profile from './components/Profile';

function App() {
  return (
   <>
   <Navbar />
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='order' element={<Order/>}/>
      <Route path='products' element={<Products/>}>
        <Route path='featured' element={<Featured/>}/>
        <Route path='new' element={<New/>}/>
      </Route> 
      <Route path='users' element={<User/>}/>
        <Route path='users/:userId' element={<UseDetails/>}/> 
      <Route path='profile' element={<Profile/>}/>
      <Route path='*' element={<Nomatch/>}/>
    </Routes></>
    
  );
}

export default App;
