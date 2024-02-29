import React from 'react';
import { Link } from 'react-router-dom';
import {BsPlus,BsEyeFill} from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { addToCart, setItemAmount } from '../features/cart/cartSlice';
import { findAProduct } from '../features/product/productSlice';
import useDispatcher from '../hooks/useDispatcher';
const Product = ({product}) => {
  
  const { id,image,category,title,price } = product
  const {changeAllState} = useDispatcher()
 // const {addToCart} = useContext(CartContext);
  const dispatch = useDispatch()
  return <div>
   <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image}></img>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={()=>{dispatch(addToCart(product,id));changeAllState(product,id);}}>
            <div className='flex justify-center items-center bg-red-500 w-12 h-12 text-white'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
        </div>
      </div>
      <div>
        <div>{category}</div>
        <Link to={`/product/${id}`} >
        <h2 onClick={()=>dispatch(findAProduct(id))} className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div>{`$${price}`}</div>
      </div>
  </div>;
};

export default Product;
