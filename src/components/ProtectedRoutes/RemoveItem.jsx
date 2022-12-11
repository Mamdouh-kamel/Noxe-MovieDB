import React from 'react'
import { Navigate } from 'react-router-dom'


export default function RemoveItem() {    
    localStorage.removeItem('token')
    return <Navigate to={'/signin'} />
  }