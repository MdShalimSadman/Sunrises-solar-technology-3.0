import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsFillCartFill  } from 'react-icons/bs';
import {AiOutlineCloseCircle  } from 'react-icons/ai';

const Navbar = () => {
  const toggleCart= () =>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref= useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-xl'>
       <div className='logo mx-5'>
        <a href={"/"}>
                            
          <Image src="/today.png" alt="" width={200} height={40} />
                            
        </a>

       </div>
        <div className='nav'>
            <ul className='flex items-center space-x-7 font-bold md:text-md'>
                <a href={'/'}><li>Home</li></a>
                <a href={'/product'}> <li>Products</li></a>
                <a href={'/order'}><li>Order</li></a>
                <a href={'/about'}><li>About us</li></a>
            </ul>
        </div>
       <div onClick={toggleCart} className='cart absolute right-0 cursor-pointer top-16 mx-5'>
        <BsFillCartFill className='text-xl md:text-2xl'/>
       </div>

    <div ref={ref} className="sideCart absolute top-0 right-0 bg-orange-100 p-10 transform transition-transform translate-x-full">
   <h2 className="font-bold text-xl">Shopping cart</h2>
   <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-orange-700"><AiOutlineCloseCircle/></span>
   <ol>
    <li>
      <span>battery</span>
    </li>
   </ol>
    </div>


    </div>
  )
}

export default Navbar