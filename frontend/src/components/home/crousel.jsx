import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../common/style.css';
import axios from 'axios';



export default function Crousel() {
  const [products, setProducts] = useState([]);


  useEffect(()=>{

        axios.get( "http://localhost:5000/products/discounted", { withCredentials: true })
          .then (
            res => {
              setProducts(res.data.products);
            }
          )
          .catch (
            error => console.log(error),
          );
  },[])

  return (
    <Carousel className='carousel' data-bs-theme="dark">

      {
        products.map((product,index) => {
          return <Carousel.Item interval={3000} className='carousel_item' key={index}>
            <img src= {product.image} alt='log' />
            <Carousel.Caption className='discount__info-container'>
                <div className='title'>lkerhweoirufheoifuhweoifuhwerosifuwehro</div>
                {/* <div className='title'>{product.title}</div> */}
                <div className='discount_amount'>-10%</div>        
            </Carousel.Caption>
          </Carousel.Item>
        })
      }
    </Carousel>
    
  );
}
