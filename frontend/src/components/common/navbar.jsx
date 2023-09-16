import logo from "../../assets/alpha_logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
import { motion } from "framer-motion";
import { StyledNavigation } from "../styles/home.style";
import { StyledContainer, StyledButton } from "../styles/common.style";
import { useEffect, useState } from "react";
import axios from "axios";

function NavigationBar({ pages, currentPage }) {
  const cart = useSelector((state) => state.cart);
  const [loggedIn, setLoggedIn] = useState(false);
  const [backgroundColor, setBackgoundColor] = useState("transparent");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/isLogged", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setBackgoundColor("black");
    } else {
      setBackgoundColor("transparent");
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <motion.nav
      initial={{ y: -350 }}
      animate={{ y: 0 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 500,
        damping: 5,
      }}
      className="NavigationBar"
      style={{ backgroundColor: backgroundColor }}>
      <StyledContainer>
        <StyledNavigation>
          <div>
            <Link to="/" className="link">
              <img src={logo} alt="logo" className="logo" />
              <span className="logo-text">lpha shop</span>
            </Link>
            {pages.map((page, index) =>
              page !== "home" ? (
                <Link to={`/${page}`} key={index} className="link">
                  <div>{page}</div>
                </Link>
              ) : (
                <Link to={"/"} key={index} className="link">
                  <div>{page}</div>
                </Link>
              )
            )}
          </div>
          <div>
            {loggedIn ? (
              <></>
            ) : (
              <Link to={"/auth"}>
                <StyledButton>login</StyledButton>
              </Link>
            )}
            {currentPage !== "home" && currentPage !== "cart" && (
              <Link to={"/cart"} className="link">
                <div>
                  <AiOutlineShoppingCart className="cart_icon" />
                  <span className="cart_number">{cart.total}</span>
                </div>
              </Link>
            )}
          </div>
        </StyledNavigation>
      </StyledContainer>
    </motion.nav>
  );
}

export default NavigationBar;
