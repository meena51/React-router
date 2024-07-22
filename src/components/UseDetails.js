import React from 'react'
import { useParams } from 'react-router-dom'
const UseDetails = () => {
    const params = useParams()
    const userId = params.userId
  return (
    <div>
      Details about use {userId}
    </div>
  )
}

export default UseDetails
