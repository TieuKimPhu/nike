import React from "react";
import { makeStyles } from "tss-react/mui";
import Carousel from "./bodyComponent/Carousel";
import Footer from "./bodyComponent/Footer";
import MerchMenu from "./bodyComponent/MerchMenu";
import MoreNike from "./bodyComponent/MoreNike";
import ProductScroll from "./bodyComponent/ProductScroll";
import Trending from "./bodyComponent/Trending";

const useStyles = makeStyles()((theme) => {
  return {
    bodyComponent: {
      margin: "0 25px",
      marginTop: "100px",
    },
    body: {
      padding: "0 44px 50px",
    },
   
  };
});

function Body(props) {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      {/* Carousel */}
      <div className={classes.bodyComponent}>
        <Carousel carouselImg={props.carouselImg} />
      </div>

      {/* Trending */}
      <div className={classes.bodyComponent}>
        <Trending
          titleTrending={props.titleTrending}
          dataTrending={props.dataTrending}
        />
      </div>

      {/* More Nike */}
      <div className={classes.bodyComponent}>
        <MoreNike
          titleMoreNike={props.titleMoreNike}
          dataMoreNike={props.dataMoreNike}
        />
      </div>

      {/* Product Scroll */}
      <div className={classes.bodyComponent}>
        <ProductScroll/>
      </div>

      {/* Merch Menu */}
      <div className={classes.bodyComponent}>
        <MerchMenu merchMenu={props.merchMenu}/>
      </div>


      {/* Footer */}
      {/* <div>
        <Footer/>
      </div> */}
    </div>
  );
}

export default Body;
