import React from 'react'
import Tag from './Tag';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
const ProductCard = ({ name, id, price, imgSrc, discount }) => {

    const handleProductClick = (event) => {
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

                        <AddToCartButton id={id} name={name} price={price} imgSrc={imgSrc} discount={discount} />

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
