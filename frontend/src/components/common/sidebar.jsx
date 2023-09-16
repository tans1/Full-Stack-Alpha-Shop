import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'

function SideBar({changeCategory, categories}) {
  const category = useSelector(state => state.product).homecategory;

  
  return (
    
    <div className='sidebar'>
      <div className='sidebar__category'>
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

export default SideBar
