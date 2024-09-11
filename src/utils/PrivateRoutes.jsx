import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoutes = () => {
    console.log(Outlet);
    
    let auth = {token : false}
  return (
    auth.token ? <Outlet/> : <Navigate /> 
  )
}

export default PrivateRoutes