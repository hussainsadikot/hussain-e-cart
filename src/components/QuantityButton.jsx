import React from 'react';

import { useDispatch, useSelector } from 'react-redux';


const QuantityButton = ({ id}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const productInCart = cartItems.find((item) => item.id === id);
  // console.log(productInCart)
  const increment = (id) => {

    dispatch({
      type: "addToCart",
      payload: { id},
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {

    dispatch({
      type: "decrementAtHome",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const isProductInCart = productInCart !== undefined;

  return (
    <div className="quant-button">
      
        <>
          <button className='inc-dec-btn' onClick={() => decrement(productInCart.id)}>-</button>
          <p>{productInCart.quantity}</p>
          <button className='inc-dec-btn' onClick={() => increment(productInCart.id)}>+</button>
        </>
      
       
      
    </div>
  );
  
}

export default QuantityButton
