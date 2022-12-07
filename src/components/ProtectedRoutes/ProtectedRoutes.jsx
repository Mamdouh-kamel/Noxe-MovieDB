import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes(props){
    let token = localStorage.getItem('token')
    if(!token){
        return <Navigate to='/signin' />
    }else{
        return props.children
    }
    
  }
