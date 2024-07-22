import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <div>
        <input type='text' placeholder='Search products'/>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='New'>New</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products
