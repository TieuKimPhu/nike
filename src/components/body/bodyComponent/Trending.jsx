import { Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  title: {
    fontSize: "100px",
    marginBottom: "50px",
    fontFamily: "'Baloo Bhaijaan 2', cursive",
    fontFamily: "'Rubik Glitch', cursive",
  },
  contentLink: {
    color: "black",
    textDecoration: "none",
  },
  trendingContainer: {
    // height: "700px",
    display: "flex",
    // alignItems: "flex-end",
    backgroundPosition: "center center",
    position: "relative",
  },
  trendingName: {
    color: "black",
    fontSize: 25,
    fontWeight: 400,
    marginBottom: 30,
    // fontFamily: "'Baloo Bhaijaan 2', cursive",
  },
  shopLink: {
    textDecoration: "none",
    margin: "0 8px 8px 0",
    padding: "8px 28px",
    backgroundColor: "black",
    borderRadius: 20,
    color: "white",
    position: "absolute",
    bottom: "10px",
    left: "50px",
    // right: "100px",
    "&:hover": {
      // opacity: 0.8,
      backgroundColor: "gray",
    },
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
}));

function Trending(props) {
  const {classes} = useStyles();
  return (
    <>
      <div classes={classes.title} style={{fontSize:"25px", fontFamily: "'Baloo Bhaijaan 2', cursive", fontFamily: "'Rubik Glitch', cursive", marginTop: "50px"}}>{props.titleTrending}</div>
      <Grid container spacing={3}>
        {props.dataTrending?.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} key={index}>
              <a href="#a" className={classes.contentLink} />
              <div className={classes.trendingContainer}>
                <div className={classes.info}>
                  {/* <div className={classes.trendingName}>{item.title}</div> */}
                  <div>
                    <img className={classes.imgStyle} src={item.img} style={{height:"100%", width:"100%"}} />
                    <a href="#a" className={classes.shopLink}>
                      {item.button}
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Trending;
