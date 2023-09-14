import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Box from "../components/Box";
import Loader from "../components/Loader";
import Pagination from "../helpers/Pagination";
import { useSelector } from "react-redux";

function Home() {
  const [tovar, setTovar] = useState("");
  const [select, setSelect] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const basket = useSelector(state => state.basket)

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


  const handleClick = (e) =>{
    e.preventDefault()
    setTovar(select)
  }

  const LastPostIndex = currentpage * postsPerPage;
  const firstPostIndex = LastPostIndex - postsPerPage;

  const currentPosts = goods.products.slice(firstPostIndex, LastPostIndex);

  // console.log(currentPosts);

  

  return (
    <div className="home container">
      <div className="home__top">
        <div className="home__change">
          <FormControl
            sx={{ m: 1, minWidth: 80 }}
          >
            <InputLabel id="demo-simple-select-autowidth-label">
              Sort
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              className="home__select"
              autoWidth
              onChange={(e)=>setSelect(e.target.value)}
              value={select}
              label="select"
            >
              <MenuItem value="price">price</MenuItem>
              <MenuItem value="rate">rate</MenuItem>
              <MenuItem value="stock">stock</MenuItem>
            </Select>
          </FormControl>
            <button className="home__btn" onClick={handleClick}>
              Применить
            </button>
        </div>

        <div className="home__total">
          <p className="home__number">
            Общее кол-во товаров- <span>{goods?.limit}</span>
          </p>
        </div>
      </div>

      <div className="home__block">
        {tovar === "" &&
          currentPosts.map((product) => (
            <Box
              key={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              id={product.id}
              product={product}
              selected={product.id in basket}
            />
          ))}

        {tovar === "price" &&
          currentPosts
            .sort((a, b) => b.price - a.price)
            .map((product) => (
              <Box
                key={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                product={product}
                selected={product.id in basket}
              />
            ))}

        {tovar === "rate" &&
          currentPosts
            .sort((a, b) => b.rating - a.rating)
            .map((product) => (
              <Box
                key={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                rating={product.rating}
                id={product.id}
                product={product}
                selected={product.id in basket}
              />
            ))}

        {tovar === "stock" &&
          currentPosts
            .sort((a, b) => b.stock - a.stock)
            .map((product) => (
              <Box
                key={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                stock={product.stock}
                id={product.id}
                product={product}
                selected={product.id in basket}
              />
            ))}
      </div>
      <Pagination
        totalPosts={goods.products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentpage}
        currentPage={currentpage}
      />
    </div>
  );
}

export default Home;
