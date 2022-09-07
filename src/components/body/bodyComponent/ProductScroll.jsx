import React, { Component } from "react";
import { makeStyles } from "tss-react/mui";
import { useSelector } from "react-redux";
import Skeleton from '@mui/material/Skeleton';
// import { unstable_HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import DetailProductPage from "../../../pages/DetailProduct/DetailProductPage";

const useStyles = makeStyles()((theme) => ({
  titile: {
    fontSize: 24,
    marginBottom: 32,
    fontFamily: "'Baloo Bhaijaan 2', cursive",
    fontFamily: "'Rubik Glitch', cursive",
  },
  container: {
    height: "450px",
    padding: 0,
    whiteSpace: "nowrap",
    overflowX: "hidden",
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    "&::-webkit-scrollbar-track": {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#757575",
    },
  },
  Product: {
    width: "300px",
    listStyle: "none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40,
  },
  ProductImage: {
    "&:hover": {
      opacity: 0.7,
    },
    width: "100%",
    transition: "opacity 1s",
  },
  ProductDetailContainer: {
    fontSize: 16,
    display: "flex",
    marginTop: 12,
    lineHeight: 1.5,
    whiteSpace: "normal",
    
  },
  ProductDetail: {
    flex: "0 0 300px",
  },
  Price: {
    flex: "1 1 auto",
  },
  ProductType: {
    color: "#757575",
  },
}));

export default function ProductScroll() {
  const {classes} = useStyles();
  // const history = unstable_HistoryRouter();
  const data = useSelector((state) => state.reducerURL?.data);
  const isLoading = useSelector(state => state.reducerURL.isLoading);

  const listProduct = data.slice(0, 20).map((item, key) => (

    <li className={classes.Product} key={key}>

      <Link to={{ pathname: `/detailProduct/${item._id}`  }}>

        <img
          className={classes.ProductImage}
          src={item.img}
          alt=""

        />
      </Link>

      <div className={classes.ProductDetailContainer}>
        <div className={classes.ProductDetail}>
          <div className={classes.ProductName}>{item.name}</div>
          <div className={classes.ProductType}>{item.message}</div>
        </div>
        {/* <div className={classes.Price}>{item.price.toLocaleString()} đ</div> */}
      </div>
    </li>
  ));

  var listScrollLazyLoad = [];
  for (let i = 0; i < 9; i++) {
    listScrollLazyLoad.push(
      <li className={classes.Product} key={`img ${i}`}>
        <Skeleton width="100%">
          <img
            className={classes.ProductImage}
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
          />
        </Skeleton>
        <div className={classes.ProductDetailContainer}>
          <div className={classes.ProductDetail}>
            <Skeleton width="70%"><div className={classes.ProductName}>Product Name</div></Skeleton>
            <Skeleton width="70%"><div className={classes.ProductType}>Product Type</div></Skeleton>
          </div>
          {/* <Skeleton><div className={classes.Price}>2.000.000 đ</div></Skeleton> */}
        </div>
      </li>
    )
  }

  return (
    <div>
      <div className={classes.titile}>Clean Looks, Sustainable Materials</div>
      {isLoading ?
        <ul className={classes.container}>{listScrollLazyLoad}</ul>
        :
        <ul className={classes.container}>{listProduct}</ul>
      }
      {/* <ul className={classes.container}>{listProduct}</ul> */}
    </div>
  );
}


