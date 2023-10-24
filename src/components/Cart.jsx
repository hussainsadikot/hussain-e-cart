import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {useSelector, useDispatch} from "react-redux"
const img1="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
const Cart = () => {

    const {cartItems, subTotal,
        shipping,
        tax,
        total} = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const increment=(id)=>{
        dispatch(
            {
                type:"addToCart",
                payload:{id},
            }
        )
        dispatch({type:"calculatePrice"})
    }
    const decrement=(id)=>{

        dispatch(
            {
                type:"decrement",
                payload:id,
            }
        )
        dispatch({type:"calculatePrice"})
    }
    const deleteHandler=(id)=>{
        dispatch(
            {
                type:"deleteItemFromCart",
                payload:id,
            }
        )
        dispatch({type:"calculatePrice"})

    }
    
    return (
    <div className='cart'>
        <main>
            {
                cartItems.length>0?(
                    cartItems.map(item=>(

                        <CartItem
                        imgSrc={item.imgSrc}
                        name={item.name}
                        price={item.price}
                         qty={item.quantity}
                          
                          id={item.id}
                          key={item.id}
                          decrement={decrement}
                          increment={increment}
                          deleteHandler={deleteHandler}
                        />
                    ))
                ):(
                    <h1>No Items Added Yet</h1>
                )
            }
        </main>
        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
      
    </div>
  )
}

const CartItem = ({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id,
  }) => (
    <div className="cartItem">
      <img src={imgSrc} alt="Item" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
  
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
  
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  );

export default Cart
