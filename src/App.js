import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { setItemAmount, setTotal } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';



const App = () => {
 
     
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
