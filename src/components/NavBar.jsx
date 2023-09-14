import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useSelector } from "react-redux";

function NavBar() {
  const basket = useSelector((state) => state.basket)
  const [showBasket, setShowBasket] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar__list">
          <Link to={"/"} className="navbar__link">
            Home
          </Link>
          <Link to={"/categories"} className="navbar__link">
            Category
          </Link>
          <Link to={"/categories"} className="navbar__link">
            Sales
          </Link>
          <Link to={"/contact"} className="navbar__link">
            Contact
          </Link>
        </div>
        <div onClick={() => setShowBasket(true)} className="navbar__basket">
          {Object.keys(basket).length > 0 && <span className="navbar__basket_icon">{Object.keys(basket).length  }</span> }
          <button>
            <LiaShoppingBasketSolid />
          </button>
        </div>
        <Basket show={showBasket} set={setShowBasket} />
      </div>
      <div className={showBasket ? "basactive" : ""}></div>
    </>
  );
}

export default NavBar;
