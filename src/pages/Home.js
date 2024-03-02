import React,{ useEffect} from 'react';
import {Product,Hero} from "../components/index"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productSlice';



const Home = () => {
     
      
     
   
     
    
     const dispatch = useDispatch();
   
    const {products} = useSelector(state=>state.product);
    
    

    
     
  const filteredProducts =
 products &&   products.filter((item)=>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })
  console.log("filteredProducts",filteredProducts)
  console.log("HI2")
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
