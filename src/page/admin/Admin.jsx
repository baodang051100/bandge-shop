import React from 'react'
import ProductList from './AllProduct/ProductList/ProductList';
import { useSelector } from 'react-redux';
import Login from '../auth/Login/Login';


const Admin = () => {
  const auth = useSelector((state) => state.auth)
  return (
    <div>
      {auth.issLogIn === true ? (
        <ProductList />
      ) : (
        <Login />
      )}
    </div>
  )
}

export default Admin