import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {addToCartAction,removeFromCartAction} from "../../store/slices/cartSlice";

function ProductCard({title , price, Id, image, category}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const addToCartFunction = (Id, image,price, title,category)=>{
    const data = {
      Id : Id, 
      image : image,
      price : price, 
      title : title,
      category : category
    }
    dispatch(addToCartAction(data))
  }
  const removeFromCart = (Id, image,price, title,category) => {
    const data = {
      Id : Id, 
      image : image,
      price : price, 
      title : title,
      category : category
    }
    dispatch(removeFromCartAction(data))
  }

  return (
    <div className='product_card_container'>
      <img src={image} alt="product" className='product_image' />
      <div className='product_detail'>
        <p className='product_name'>{title}</p>
        <div className='product_price'>$ {price}</div>
      </div>

      <div className='products_button_container'>
        {cart[Id] !== undefined && cart[Id] !== null && cart[Id].quantity > 0 ? (
          <div className='add-remove-button'>
            <button className='product_add_to_cart increase' onClick={
                () => addToCartFunction(Id, image,price, title,category)
                }>+</button> 
            <span className='amount--in-cart'> {cart[Id].quantity} </span>
            <button className='product_add_to_cart decrease' onClick={
              () => removeFromCart(Id, image,price, title,category)
              }>-</button>
          </div>
        ) : (
          <button className='product_add_to_cart' onClick={
            () => addToCartFunction(Id, image,price, title,category)
          }>Add to Cart</button>
        )}
      </div>
      
    </div>
  )
}

export default ProductCard














