import React,{ useEffect} from 'react';

import Product from '../components/Product'
import Hero from '../components/Hero';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../features/product/productSlice';
import { setItemAmount, setTotal } from '../features/cart/cartSlice';


const Home = () => {
     
      
     
   
     
    
     const dispatch = useDispatch();
   
    const {products} = useSelector(state=>state.product);
    const {cart} = useSelector(state=>state.cart)
    
     useEffect(()=>{
      dispatch(fetchProducts())
      
     },[dispatch])
    //  useEffect(()=>{
    //   dispatch(setItemAmount())
    //   dispatch(setTotal())
    //  },[cart])
    
     
  const filteredProducts =
 products &&   products.filter((item)=>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })
  console.log(filteredProducts)
  return (
    filteredProducts &&
  <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  max-w-sm  mx-auto gap-[30px]  md:max-w-none md:mx-0'>
          {filteredProducts.map(product =>{
          //  return <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>{product.title}</div>;
          return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
