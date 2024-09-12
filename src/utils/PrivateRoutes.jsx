import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoutes = () => {
    console.log(Outlet);
    
    let auth = {token : true}
  return (
    auth.token ? <Outlet/> : <Navigate /> 
  )
}

export default PrivateRoutes