import React, { useEffect } from 'react';
import { Route, createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/product/productSlice';
import Layout from './components/Layout';



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
    console.log("useeffect")
  }, [])
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
      </Route>
    )
  )



  return <RouterProvider router={router} />
};

export default App;
