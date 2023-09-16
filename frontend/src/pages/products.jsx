import NavigationBar from "../components/common/navbar";
import DisplayProducts from "../components/products/displayProducts";
import FilterProducts from "../components/products/filterProducts";
import SideBar from "../components/common/sidebar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeProductCategoryAction,
  changeSizeAction,
} from "../store/slices/productDisplay";
import axios from "axios";

function ProductsPage() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(["All"]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/categories")
      .then((res) => {
        setCategories([...categories, ...res.data.categories]);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeCategory = (cat) => {
    dispatch(changeProductCategoryAction(cat));
  };

  const changeSize = (sz) => {
    dispatch(changeSizeAction(sz));
  };
  return (
    <>
      <NavigationBar pages={["home"]} currentPage={"products"} />
      <div>
        <SideBar changeCategory={changeCategory} categories={categories} />
        <div className="products_main_container">
          <FilterProducts changeSize={changeSize} />
          <DisplayProducts />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
