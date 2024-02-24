import React, { useContext, useEffect, useState } from 'react';

import {BsBag} from "react-icons/bs"
import { CartContext } from '../contexts/CartContext';
import { Link, useSearchParams } from 'react-router-dom';
import Logo from "../img/logo.svg"
import { handleOpen } from '../features/sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const [isActive,setIsActive] = useState(true);
  const dispatch = useDispatch();


  const {itemAmount} = useContext(CartContext);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
    })
  })
  return <header className={`${isActive?'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container flex mx-auto items-center justify-between h-full'>
    <Link to={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} />
        </div>
      </Link>
   
      

    <div className='cursor-pointer flex relative' onClick={()=>dispatch(handleOpen()) }>
      <BsBag className='text-2xl' />
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] 
      h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>
    </div>
  </header>;  
  

};

export default Header;
