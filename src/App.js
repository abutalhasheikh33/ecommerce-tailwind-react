import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SignIn from './Auth/SignIn.js';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>

      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />

      </Routes>
    </Router>
  </div>;
};

export default App;
