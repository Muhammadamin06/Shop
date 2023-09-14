import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import Loader from "../components/Loader";
import CategoryBox from "../components/CategoryBox";

function Category() {
  const { data, error, isLoading, isFetching, isError } = useQuery(
    ["goods"],
    () => axios.get(`https://dummyjson.com/products`)
  );
  if (isLoading || isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <h1>{error.meesage}</h1>;
  }

  const { data: goods } = data;

  // console.log(goods);

  return (
    <div className="category container">
      <CategoryBox product={goods.products.filter(products=> products.category === 'smartphones')} title="smartphones"  />
      <CategoryBox product={goods.products.filter(products=> products.category === 'laptops')} title="laptops" />
      <CategoryBox product={goods.products.filter(products=> products.category === 'fragrances')} title="fragrances" />
      <CategoryBox product={goods.products.filter(products=> products.category === 'skincare')} title="skincare" />
      <CategoryBox product={goods.products.filter(products=> products.category === 'groceries')} title="groceries" />
      <CategoryBox product={goods.products.filter(products=> products.category === 'home-decoration')} title="home-decoration" />
    </div>
  );
}

export default Category;
