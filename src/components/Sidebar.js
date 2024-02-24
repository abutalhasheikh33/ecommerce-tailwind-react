import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"

import CartItem from "../components/CartItem"


import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { handleClose } from '../features/sidebar/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {

  const dispatch = useDispatch();
  const { cart,clearCart,itemAmount,total } = useContext(CartContext);
  const isOpen = useSelector(state=>state.sidebar.isOpen);


  return <div className={`${ isOpen ? 'right-0':'-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-vw-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>
        Shopping Bag({itemAmount})
      </div>
      <div onClick={()=>dispatch(handleClose())} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />

      
      </div>

    </div>
    <div className='flex flex-col gap-y-2 h-[460px] lg:h-[490px] overflow-y-auto overflow-x-hidden border-b'>
      {cart.map(item=>{
        return <div><CartItem item={item} /></div>
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'> 
        <span className='mr-2'>Total:</span>{`${parseFloat(total).toFixed(2)}`}
        </div>
      
      <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2></FiTrash2></div>
    </div>
    <Link className='bg-gray-200 flex p-4 justify-center items-center text-primary
    w-full font-medium'>View Cart</Link>
    <Link className='bg-primary flex p-4 justify-center items-center text-white
    w-full font-medium'>Checkout</Link>
    </div>
  </div>;

};

export default Sidebar;
