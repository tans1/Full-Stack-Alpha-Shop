import React from 'react'
import "./style.css"
import DropDownButton from './dropDowns'
import { useSelector } from 'react-redux'

function FilterProducts({changeSize}) {
  const product = useSelector(state => state.product)
  return (
    <div className='product__filter'>
      <div className='dropDown category'>
        <div className='current_category'>{product.homecategory} - Category</div>
        <DropDownButton changeSize={(size) => changeSize(size)}/>
      </div>
    </div>
  )
}

export default FilterProducts
