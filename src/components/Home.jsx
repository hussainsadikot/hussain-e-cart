import React, {useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import {useDispatch, useSelector} from "react-redux"
import ProductCard from './ProductCard'
import Input from './Input'
import DropDown from './DropDown'
import Loader from './Loader';
import EmptyScreen from './EmptyScreen';
import { useAuth0 } from "@auth0/auth0-react";

import { debounce } from '../utils/debounce'
import {
  
  fetchCategories,
} from '../redux/categorySlice';
import {
  fetchAllProducts,
  fetchProductsByCategory,
  searchProducts,
} from '../redux/productSlice';





const img1="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
const productList =[
  {
    name:"Mac Book Air",
    price:12000,
    imgSrc:img1,
    id:"001"
  },
  {
    name:"Mac Book Air",
    price:12000,
    imgSrc:img1,
    id:"002"
  },
]
const Home = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const {categories} = useSelector(state => state.category);
  // console.log(categories)
  const {productList} = useSelector((state) => state.product);
  // console.log(productList)
  const {loading} = useSelector((state) => state.product.loading);
  const [selectedCategory, setSelectedCategory] = useState('');
  const debounceChange = debounce(handleChange, 500);
  const dispatch = useDispatch()
  
 
  function handleChange (event) {
    const query = event.target.value;
    dispatch(searchProducts(query));
  };

  const dropdownChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    dispatch(fetchProductsByCategory(selectedCategory));
  };
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts())
  }, [dispatch]);
  return (
    <>
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            left: '10%',
            width: '80%',
            position: 'relative',
          }}
        >
          <Input
            style={{
              display: 'flex',
              padding: '10px',
              borderRadius: '10px',
              height: '42px',
            }}
            placeholder="Search"
            onChange={debounceChange}
          />
          <DropDown
            value={selectedCategory}
            handleChange={dropdownChange}
            options={categories}
            placeholder="Select Category"
            labelKey={selectedCategory}
            idKey={selectedCategory}
            key={selectedCategory}
          />
        </div>
        <div className="home">
          {!loading &&
            productList?.products &&
            productList?.products.length >= 1 &&
            Array.isArray(productList?.products) ? (
              productList?.products.map((product) => (
                <ProductCard
                  key={product.id}
                  imgSrc={product.thumbnail}
                  name={product.title}
                  price={product.price}
                  id={product.id}
                 
                 
                  discount={product.discountPercentage}
                />
              ))
            ) : loading ? (
              <Loader />
            ) : (
              <EmptyScreen
                className="empty"
                title={'No Products Found'}
                description={'Your search did not match any products. Please try again.'}
              />
            )}
        </div>
      </div>
        </>
  )
}

export default Home
