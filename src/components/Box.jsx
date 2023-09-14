import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch } from "react-redux";
import basket, { addBasket, delBasket } from "../redux/basket";
import { useNavigate } from "react-router-dom";

function Box({ image, title, price, rating, discount, stock, id, product, selected }) {
  

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleToggle = ()=>{
    selected ? dispatch(delBasket(id)) : dispatch(addBasket(product))
  }
  return (
    <div className="box">
      <p className={stock ? "box__stock" : "box__stock_unactive"}>
        {stock && Math.floor(stock)}
      </p>
      <p className={discount ? "box__discount" : "box__discount_unactive"}>
        {discount && Math.floor(discount)}
      </p>
      <p className={rating ? "box__rating" : "box__rating-unactive"}>
        {rating}
      </p>
      <div className="box__info">
        <img className="box__image" src={image} alt={title} onClick={()=>navigate(`${id}`)} />
        <h2 className="box__title">{title}</h2>
        <div className="box__buy">
          <p className="box__price">
            {price} <span>000 сум</span>
          </p>
          <button className="box__btn" onClick={handleToggle}>
            {selected ? <AiOutlineCheck /> : "Buy " }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
