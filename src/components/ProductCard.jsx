import React from 'react'
import QuantityButton from './QuantityButton'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import Tag from './Tag';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
const ProductCard = ({ name, id, price, handler, imgSrc, quantity, discount }) => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const productInCart = cartItems.find((item) => item.id === id);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const increment = (id) => {
        dispatch(
            {
                type: "addToCart",
                payload: { id },
            }
        )
        dispatch({ type: "calculatePrice" })
    }
    const decrement = (id) => {

        dispatch(
            {
                type: "decrementAtHome",
                payload: id,
            }
        )
        dispatch({ type: "calculatePrice" })
    }
    const handleAddToCart = ({ id }) => {
        if (isAuthenticated) {
            // Dispatch an action to add the product to the cart
            dispatch({
                type: "addToCart",
                payload: { id, /* add other product details here */ },
            });
            // Calculate the cart price or any other necessary actions
            dispatch({ type: "calculatePrice" });
        }
        else {
            // Redirect to login or handle authentication as needed
            loginWithRedirect();
        }
    }
    const handleProductClick =  (event) => {
        if (!event.target.classList.contains('image')) {
            event.preventDefault();
        }
    };
    return (
        <div>
            <Link to={{ pathname: `/product/${id}`, state: id, }} onClick={handleProductClick}>
                <div className="productCard" style={{ backgroundColor: "white", }}>
                    {discount && <Tag value={`${discount}%`} />}
                    <div className="img-cover"><img
                        className='image' src={imgSrc} alt={name} /></div>
                    <span className='title'>{name}</span>
                    <div className="footer">
                        <span>${price}</span>
                        {/* {
                        productInCart ? (
              <QuantityButton id={id} />
            ) : (
              <button
                className='add-to-cart-btn'
                onClick={() => handler({ name, price, id, quantity, imgSrc, quantity: 1, isAuthenticated, discount })}
              >
                Add to Cart
              </button>
              
              )
              } */}
              <AddToCartButton id={id} name={name} price={price}  imgSrc={imgSrc} discount={discount}/>
        
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
