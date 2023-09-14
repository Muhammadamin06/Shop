import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryBox({ title, product }) {
  console.log(product);
  const navigate = useNavigate()
  return (
    <>
      <h3 className="category__title">{title}</h3>
      <div className="category__block">
        {product.map((product) => (
          <div className="category__box" key={product.id}>
            <p className="category__sale">
              -{Math.floor(product.discountPercentage)}%
            </p>
            <img
              className="category__image"
              src={product.images[0]}
              alt="product"
            />
            <div className="category__info">
              <h3 className="category__brand">{product.brand}</h3>
              <p className="category__box_title">{product.title}</p>
              <div className="category__price">
                <p className="category__current_price">
                  {product.price -
                    Math.floor(
                      (product.price / 100) *
                        Math.floor(product.discountPercentage)
                    )}{" "}
                  $
                </p>
                <p className="category__oldprice">{product.price} $</p>
              </div>
            </div>
            <div className="card__content">
              <h3 className="card__title">{product.title}</h3>
              <button className="card__btn" onClick={()=> navigate(`/${product.id}`)}>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryBox;
