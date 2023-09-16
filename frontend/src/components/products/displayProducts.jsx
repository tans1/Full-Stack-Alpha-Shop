import React, { useEffect, useState } from 'react'
import './style.css';
import ProductCard from './productCard';
import { useSelector } from 'react-redux';



function DisplayProducts() {
  const [products, setProducts] = useState([]);
  const category = useSelector(state => state.product).homecategory;

  useEffect(() => {

    const url = `http://localhost:5000/products/filter?category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      
    
  }, [category]);

  return (
    <div className='products__container'>
      {
        products.map(product => {
          return <ProductCard 
                          title={product.title} 
                          price={product.price} 
                          Id={product._id} 
                          image={product.image} 
                          category={product.category}/>
        })
      }
      
      {}
    </div>
  )
}

export default DisplayProducts
