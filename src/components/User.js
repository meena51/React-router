import React from 'react'
import { useSearchParams } from 'react-router-dom'
const User = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showAllActiveParams = searchParams.get('filter')==='active';
  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h3>User 3</h3>
      <button onClick={()=>setSearchParams({filter : 'active'})} >Active Users</button>
      <button onClick={()=>{setSearchParams({})}}>Reset Filters</button>
      {
        showAllActiveParams ? 'Showing Active Users' : 'Shouwing All Users'
      }
    </div>
    
  )
}

export default User
