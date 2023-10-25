import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../redux/productSlice';
import noImage from  '../assests/no-product.png'
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import FormatPrice from '../utils/FormatePrice';
import DetailsThumb from './DetailsThumb';
import '../styles/productdetail.scss'
import AddToCartButton from './AddToCartButton';
const ProductDetail = () => {
    const { productId } = useParams();
    const [index, setIndex] = useState(0);
    const myRef = useRef();
    const givenId = parseInt(productId)
    console.log("given id is " + givenId + " productId is " + productId)
    // const  productList  = useSelector((state) => state.product.productList);
    // const singleProduct = productList.filter((item)=>item.id===productId)
    // console.log(singleProduct)
    
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Fetching product details for productId:', givenId);

        dispatch(fetchProduct(givenId))
        // const { index } = this;
            // myRef.current.children[index].className = "active";
    }, [dispatch, givenId,productId])

    const noImageArray = [noImage]
    const { productDetail } = useSelector((state) => state.product);
    const {
        brand,
        category,
        description,
        discountPercentage,
        id,
        images,
        price,
        rating,
        stock,
        thumbnail,
        title,


    } = productDetail || {};
    console.log("Product Details " + title + description)
    const loading = useSelector((state) => state.product.loading);
    console.log("Loading true or false " + loading)

    const handleTab = (index) => {
        setIndex(index);
        console.log(index)
        const gimages = myRef.current.children;
        for (let i = 0; i < gimages.length; i++) {
          gimages[i].className = gimages[i].className.replace("active", "");
        }
        gimages[index].className = "active";
    };
   


    return (
        <>
            {
                loading ? (<h2>Product Details Loading
                //         </h2>) :

                    (
                        <div className="details" >
                            <div className="big-img">
                                {
                                    (Array.isArray(images))?
                                    <img src={images[index]} alt="" />:
                                    <h1>Loading Images</h1>
                                }
                            </div>

                            {/* product dAta  */}
                            
                                
                                <div className="box">
                                    <div className="row">
                                        <h2>{title}</h2>
                                        <span>${price}</span>
                                    </div>


                                    <p>{description}</p>


                                    <DetailsThumb images={(Array.isArray(images))?images:noImageArray} tab={handleTab} myRef={myRef} />
                                    <AddToCartButton id={id} name={title} price={price} imgSrc={thumbnail} discount={discountPercentage}/>
                                </div>
                            </div>
                     
                       

                    )
            }

        </>
    )
};

export default ProductDetail;
