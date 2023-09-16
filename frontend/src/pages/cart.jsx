import React, { useEffect, useState } from "react";
import NavigationBar from "../components/common/navbar";
import CartSideBar from "../components/cart/cartSidebar";
import DisplayTheProducts from "../components/cart/displayTheProducts";
import { useSelector, useDispatch } from "react-redux";
import { changeCartCategoryAction } from "../store/slices/productDisplay";
import "./style.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(["All"]);
  const cart = useSelector((state) => state.cart);
  const products = Object.values(cart);
  const totalPrice = cart.amount;
  const navigate = useNavigate();

  useEffect(() => {
    products.forEach((product) => {
      if (
        !categories.includes(product.category) &&
        product.category !== undefined
      ) {
        setCategories([...categories, product.category]);
      }
    });
  }, [products, categories]);

  const handleCheckout = () => {
    axios
      .get("http://localhost:5000/user/isLogged", { withCredentials: true })
      .then((res) => {
        if (!res.data) {
          navigate("/auth");
        } else {
          navigate("/payment");
        }
      })
      .catch (
        (err) => {
          navigate("/auth");
        }
      )
      ;
  };
  const changeCategory = (cat) => {
    dispatch(changeCartCategoryAction(cat));
  };

  return (
    <div>
      <NavigationBar pages={["home", "products"]} currentPage={"cart"} />
      <div className="display_products">
        <div className="cart_page_sidebar">
          <CartSideBar
            changeCategory={changeCategory}
            categories={categories}
          />
        </div>
        <div className="list_products_ofCart">
          <DisplayTheProducts />
        </div>
      </div>

      <div className="checkOut">
        <div className="total">
          total : {parseFloat(totalPrice.toFixed(2))} $
        </div>
        <div className="checkOut_button">
          <button onClick={handleCheckout}>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
