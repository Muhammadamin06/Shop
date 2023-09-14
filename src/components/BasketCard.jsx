import React, { useState } from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { addAmount, delAmount, delBasket } from "../redux/basket";

function BasketCard({ id, title, price, image, stock, amount}) {
  
  const dispatch = useDispatch()

  

  const cancel = () => {
    dispatch(delBasket(id))
  }
  return (
    <div className="basket__card">
      <img src={image} alt={title} className="basket__card_image" />
      <div className="basket__card_box">
        <h3 className="basket__card_title">{title}</h3>
        <p className="basket__card_stock">In stock-<span>{stock}</span></p>
      </div>
        <div className="basket__num">
        <p className="basket__card_stock">Price-<span>{price}</span> $</p>
          <button className="basket__minus" onClick={()=>dispatch(delAmount(id))}>
            -
          </button>
          <p className="basket__amount">{amount}</p>
          <button className="basket__add" onClick={()=>dispatch(addAmount(id))}>
            +
          </button>
        </div>

      <button className="basket__card_close" onClick={cancel}><AiOutlineCloseCircle /></button>
      
    </div>
  );
}

export default BasketCard;
