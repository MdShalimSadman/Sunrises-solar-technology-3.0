import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const product = () => {
  return (
    <>
    <Head>
        <title>Products</title>
        <meta name="description" content="Sunrises.com - Official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/today.png" />
      </Head>
    <div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg" >
      
        <a className="block relative  rounded overflow-hidden"href={'/products/demo'}>
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg" />
        </a>
        <div className="mt-4 text-center" >
          <a href={'/products/demo'}>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
          </a>
        </div>
       
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg" >
     
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
       
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg" />
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://solcellen.nu/wp-content/uploads/2021/07/longi360w.jpg"/>
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
    </>
  )
}

export default product