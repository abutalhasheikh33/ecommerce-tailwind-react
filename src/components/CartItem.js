import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import {increaseAmount,decreaseAmount,removeFromCart} from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';
import useDispatcher from '../hooks/useDispatcher';

const CartItem = ({item}) => {
  const { id, title, image, price, amount  } = item;
  //const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
 //const {  } useSelector(state=>state.cart);
 const dispatch = useDispatch();
 const {changeAllState} = useDispatcher()
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-400 w-full font-light
  text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */}
      <Link  to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image}></img>
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>{title}</Link>
          <div onClick={()=>{dispatch(removeFromCart(id));changeAllState()}} className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition'></IoMdClose>
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
           <div onClick={()=>{dispatch(decreaseAmount(id));changeAllState()}} className='flex-1 h-full flex justify-center items-center cursor-pointer' ><IoMdRemove /></div> 
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div onClick={()=>{dispatch(increaseAmount(id));changeAllState()}} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd /></div>
          </div>

          <div className='flex-1 flex items-center justify-around'>${price}</div>

          <div className='flex-1 flex justify-end items-center text-primary font-medium'>${`${parseFloat(item.price*amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
