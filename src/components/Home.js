import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>navigate('order')}>Place Order</button>
    </div>
  )
}

export default Home
