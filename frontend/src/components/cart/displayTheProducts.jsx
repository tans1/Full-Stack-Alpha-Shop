import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../store/slices/cartSlice';
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";


function DisplayTheProducts() {
    const products = Object.values(useSelector(state => state.cart))
    const dispatch = useDispatch();
    const productcart = useSelector(state => state.product)

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div>
        {
          productcart.cartcategory !== "All" ?
            products
            .filter(product => product.category === productcart.cartcategory)
            .map((product,index) => (
                typeof product !== 'number' ?
                    <div className='cart_products_container' key={index}>
                        <div className='cart_image'>

                                {imageLoaded ? (
                                    <img src={`${product.imageUrl}`} alt="cart product"  />
                                ) : (
                                    <CircularProgress size={100} thickness={4} color='secondary' />
                                )}
                        </div>
                        <div className='cart_product_description'>
                            <div className='cart_product_name-price'>
                                <div className='cart_product_name'>{product.title}</div>
                            </div>
                            <div className='price_button'>
                            <div className='cart_product_price'>${product.price}</div>
                                <div className='cart_product_quantity'>
                                {
                                    product.quantity > 0 ?
                                    <>
                                    <button onClick={() => dispatch(addToCartAction(product))}> + </button>
                                        {product.quantity}
                                    <button onClick={() => dispatch(removeFromCartAction(product))}> - </button>
                                    </>
                                :
                                     <>
                                     <button onClick={() => addToCartAction(product)}>
                                        Add to Cart
                                    </button>
                                     </>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
        
            
            ))

            : 

            products
            .map((product,index) => (
                typeof product !== 'number' ?
                    <div className='cart_products_container' key={index}>
                        <div className='cart_image'>
                            
                            {imageLoaded ? (
                                    <img src= {product.imageUrl} alt="cart product"  />
                                ) : (
                                    <CircularProgress size={100} thickness={4} color='secondary' />
                                )}

                        </div>
                        <div className='cart_product_description'>
                            <div className='cart_product_name-price'>
                                <div className='cart_product_name'>{product.name}</div>
                                <div className='cart_product_price'>${product.price}</div>
                            </div>
                            <div className='cart_product_quantity'>
                                {
                                    product.quantity > 0 ?
                                    <>
                                    <button onClick={() => dispatch(addToCartAction(product))}> + </button>
                                        {product.quantity}
                                    <button onClick={() => dispatch(removeFromCartAction(product))}> - </button>
                                    </>
                                :
                                     <>
                                     <button  onClick={() => dispatch(addToCartAction(product))}>
                                        Add to Cart
                                    </button>
                                     </>
                                }
                                
                                </div>
                        </div>
                    </div>
                    :
                    <></>
            ))}
            
        
    </div>
  )
}

export default DisplayTheProducts;
