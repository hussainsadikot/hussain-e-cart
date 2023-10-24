import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import {useSelector} from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login'
const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <nav>
      <h2>Easy Shop</h2>
      <div>
        <Link to={"/"}>Home</Link>
        {
          isAuthenticated && (
            
              <p> {user.name} </p>
            
          )
        }
         {isAuthenticated ? (
           
              <button className='log-in-out'
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
          
          ) : (
           
              <button className='log-in-out' onClick={() => loginWithRedirect()}>Log In</button>
            
          )}
        <Link to={"/cart"}><FiShoppingBag/>
        <p>{cartItems.length}</p></Link>

      </div>
      
    </nav>
  )
}

export default Header
