import React, { useState } from "react";
import bag from "../images/shoppingbag.png";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";

function Basket({ show, set }) {
  const navigate = useNavigate()
  const basket = useSelector((state) => state.basket);
  const products = Object.values(basket);
  const checkBasket = products.length === 0;
  const totalPrice = products.reduce((acc,el)=>acc + el.price * el.amount,0)
  
  console.log(products);
  return (
    <div className={show ? "basket_active" : "basket"}>
      <div className="basket__top">
        <h3 className="basket__title">Shopping Cart</h3>
        <button className="basket__cancel" onClick={() => set(false)}>
          <MdRemoveShoppingCart />
        </button>
      </div>
      <div className="basket__center">
        {checkBasket ? (
          <div className="basket__empty">
            <div className="basket__empty_box">
              <img src={bag} alt="shopping bag" className="basket__empty_img" />
              <h3 className="basket__empty_title">Your Cart is Empty</h3>
              <p className="basket__empty_text">
                Must add items on the cart before you proceed to check out
              </p>
              <button className="basket__empty_btn" onClick={() => navigate('/') || set(false)}>
                Shop now
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="basket__box">
              {products.map((product) => (
                <BasketCard key={product.id} {...product} image={product.images[0]} amount={product.amount} />
              ))}
            </div>
            <div className="basket__bottom">
              <div className="basket__price">
                <p className="basket__total">Subtotal :</p>
                <p className="basket__num">{totalPrice} $</p>
              </div>
              <div className="basket__btns">
              <button className="basket__empty_btn" onClick={() =>navigate('/categories') || set(false)}>
                Categories
              </button>
              <button className="basket__empty_btn" onClick={() =>navigate('/contact')|| set(false)}>
                Contacts and Buy
              </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;
