import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function Product() {
  const [num, setNum] = useState(1);
  const navigate = useNavigate()

  const decrease = () => {
    if (num > 0) {
      setNum((num) => num - 1);
    }
  };
  const increase = () => {
    if (num < product.stock) {
      setNum((num) => num + 1);
    }
  };

  const { Id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["product"], () => {
    return axios.get(`https://dummyjson.com/products/${Id}`);
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return error.message;
  }
  const { data: product } = data;

  return (
    <div className="product container">
      <div className="product__left">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="product__swiper"
        >
          {product.images.map((image) => (
            <SwiperSlide key={image}>
              <img className="product__image" src={image} alt="product" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product__right">
        <h3 className="product__title">{product.title}</h3>
        <p className="product__price">
          {product.price -
            Math.floor(
              (product.price / 100) * Math.floor(product.discountPercentage)
            )}{" "}
           $
        </p>
        <div className="product__view">
          <Rating
            className="product__star"
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
          <p className="product__opinion">Customer's Review</p>
        </div>
        <p className="product__text">{product.description}</p>
        <p className="product__stock">
          In stock - <span>{product.stock}</span>
        </p>
        <div className="product__get">
          <div className="product__num">
            <button className="product__minus" onClick={decrease}>
              -
            </button>

            <p className="product__amount">{num}</p>
            <button className="product__add" onClick={increase}>
              +
            </button>
          </div>
          <button className="product__buy" onClick={()=>navigate(`/contact`)}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
