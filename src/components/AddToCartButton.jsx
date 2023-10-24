import React from 'react'
import toast from 'react-hot-toast'
import {useDispatch, useSelector} from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";
import QuantityButton from './QuantityButton'

const AddToCartButton = ({ id, name, price, imgSrc, discount }) => {

   
    const dispatch = useDispatch()
    // const { name, price, id, quantity, imgSrc, isAuthenticatedAlready, discount } =props

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
   
    // const {productList} = useSelector((state) => state.product);
    // const product = productList.find((item) => item.id === id);
    // // console.log(productList)
    const {cartItems} = useSelector(state=>state.cart)
    // // console.log(cartItems)
    const productInCart = cartItems.find((item) => item.id === id);
    // console.log(productInCart)


    const addToCartHandler=()=>{
       
        if(!isAuthenticated){
    
         
            loginWithRedirect()
        }else{

            dispatch({
                type: 'addToCart',
                payload: { id, name, price, quantity:1, imgSrc, discount },
            });
            toast.success("Added to Cart")
            dispatch({type:"calculatePrice"})
        }
        
        
    
      }
    
  
    
        
       if(productInCart) {
        return(

            <QuantityButton id={id} />
        )
       }else{
            return(

              <button
                className='add-to-cart-btn'
                onClick={() => addToCartHandler()}
              >
                Add to Cart
              </button>
            )
       }
           
              
        
}

export default AddToCartButton
