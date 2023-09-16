import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'

function CartSideBar({changeCategory, categories}) {
  const category = useSelector(state => state.product).cartcategory;

  
  return (
    
    <div className='Cartsidebar'>
      <div className='Cartsidebar__category'>
        Categories
      </div>
      <ul>
        {categories.map((categ, index) => (
          <li className='category_list' key={index} onClick={()=> changeCategory(categ)}>
            {
              category === categ ?
              <input  type="radio" value={categ} name={"categories"} checked />
              :
              <input  type="radio" value={categ} name={"categories"}  />
            }
            <label >{categ}</label>
          </li>
        ))}
      </ul>
    </div>
  
  )
}

export default CartSideBar