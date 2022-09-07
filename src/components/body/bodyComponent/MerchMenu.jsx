import React, { useState } from "react";
// import { makeStyles } from "tss-react/mui";
// import { useSelector } from "react-redux";
// import Skeleton from '@mui/material/Skeleton';
// import { createBrowserHistory } from 'history';
// import { Link } from "react-router-dom";
import { Grid, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  MerchMenu: {
    width: "880px",
    height: "auto",
    margin: "auto",
    marginBottom: "50px",
    overflowY: "hidden",
    // backgroundColor: "yellow",
    // transition: "height .5s ",
  },
  menuTitle: {
    display: "block",
    marginBottom: 24,
    fontSize: 16,
    color: "black",
    textDecoration: "none",
    // height: "100px",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      opacity: "0.3",
      overflow: "hidden",
      transition: "all 5s linear",
      // height: "100px",
    },
  },
  menuItem: {
    display: "block",
    color: "#757575",
    marginBottom: 12,
    fontSize: 16,
    textDecoration: "none",
    lineHeight: 1.428571,
    // height: "50px",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      opacity: "0.5",
      overflow: "hidden",
      transition: "all 5s linear",
    },
  },
  MerchMenuMobile: {
    marginLeft: 24,
    marginBottom: 20,
  },
  hiddenMenu: {
    opacity: 0,
    maxHeight: "0px",
    transition: "max-height .7s .2s, opacity .2s ",
    "&.active": {
      opacity: 1,
      maxHeight: "1000px",
      transition: "max-height .5s .5s, opacity .2s .6s ",
    },
  },
}));

export default function MerchMenu(props) {
  const classes = useStyles();
  const [merchMenu, setMerchMenu] = useState(false);
  const [merchMobile, setMerchMobile] = useState(0);

  return (
    <div>
      <Hidden xsDown>
        <Grid
          container
          spacing={3}
          className={classes.MerchMenu}
          onMouseEnter={() => setMerchMenu(true)}
          onMouseLeave={() => setMerchMenu(false)}
        >
          {props.merchMenu.map((item, key) => {
            return (
              <Grid item sm={3} key={key}>
                <a href="#a" className={classes.menuTitle}>
                  {item.heading}
                </a>
                <a href="#a" className={classes.menuItem}>
                  {item.title1}
                </a>
                <a href="#a" className={classes.menuItem}>
                  {item.title2}
                </a>
                <a href="#a" className={classes.menuItem}>
                  {item.title3}
                </a>
                <a href="#a" className={classes.menuItem}>
                  {item.title4}
                </a>

                <div
                  className={`${classes.hiddenMenu}${
                    merchMenu ? " active" : ""
                  }`}
                >
                  <a href="#a" className={classes.menuItem}>
                    {item.title5}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title6}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title7}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title8}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title9}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title10}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title11}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title12}
                  </a>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>

      {/*Merch Menu Mobile*/}
      <Hidden smUp>
        {/*Icons*/}
        {props.merchMenu.map((item, index) => {
          return (
            <div key={index}>
              <a
                href="#a"
                className={classes.menuTitle}
                onClick={() => setMerchMobile(index + 1)}
              >
                {item.heading}
              </a>
              {merchMobile === index + 1 && (
                <div className={classes.MerchMenuMobile}>
                  <a href="#a" className={classes.menuItem}>
                    {item.title1}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title2}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title3}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title4}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title5}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title6}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title7}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title8}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title9}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title10}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title11}
                  </a>
                  <a href="#a" className={classes.menuItem}>
                    {item.title12}
                  </a>
                </div>
              )}
            </div>
          );
        })}

        {/*Shoes*/}
        <a className={classes.menuTitle} onClick={() => setMerchMobile(2)}>
          Shoes
        </a>
        {merchMobile == 2 && (
          <div className={classes.MerchMenuMobile}>
            <a href="#" className={classes.menuItem}>
              All Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Custom Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Jordan Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Running Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Basketball Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Football Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Gym & Training Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Lifestyle Shoes
            </a>
          </div>
        )}

        {/*Clothing*/}
        <a className={classes.menuTitle} onClick={() => setMerchMobile(3)}>
          Clothing
        </a>
        {merchMobile == 3 && (
          <div className={classes.MerchMenuMobile}>
            <a href="#" className={classes.menuItem}>
              All Clothing
            </a>
            <a href="#" className={classes.menuItem}>
              Modest Wear
            </a>
            <a href="#" className={classes.menuItem}>
              Hoodies & Pullovers
            </a>
            <a href="#" className={classes.menuItem}>
              Shirts & Tops
            </a>
            <a href="#" className={classes.menuItem}>
              Jackets
            </a>
            <a href="#" className={classes.menuItem}>
              Compression & Nike Pro
            </a>
            <a href="#" className={classes.menuItem}>
              Trousers & Leggings
            </a>
            <a href="#" className={classes.menuItem}>
              Shorts
            </a>
          </div>
        )}

        {/*Kid's*/}
        <a className={classes.menuTitle} onClick={() => setMerchMobile(4)}>
          Kid's
        </a>
        {merchMobile == 4 && (
          <div className={classes.MerchMenuMobile}>
            <a href="#" className={classes.menuItem}>
              Infant & Toddler Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Jordan Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Basketball Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Running Shoes
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Clothing
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Backpacks
            </a>
            <a href="#" className={classes.menuItem}>
              Kids' Socks
            </a>
          </div>
        )}
      </Hidden>
    </div>
  );
}
