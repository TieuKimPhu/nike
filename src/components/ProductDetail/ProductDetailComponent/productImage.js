import React from 'react'
import { Card, CardActionArea, CardMedia, Container, Grid, Hidden, Skeleton, Slider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const useStyles = makeStyles(theme =>({
    productContainer: {
        fontSize: "16px",
    },
    productImage: {
        width: "100%",
    },
    image: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
}))
const ProductImage = ({ detailProduct, index }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  const isLoading = useSelector((state) => state.reducerURL.isLoading)
  var listLazyLoad = [];
  for (let i = 0; i < 6; i++){
    listLazyLoad.push(
      <Grid item xs={6} key={i}>
          <Skeleton animation="wave">
              <img className={classes.productImage} src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a11b2cf9-ba4e-4b98-8021-b1527da06169/air-max-270-g-golf-shoe-Z6vCfs.png" />
          </Skeleton>
      </Grid>
    )
  }
  return (
    <div>
      abs
      {/* <Hidden smDown>
          {isLoading?
            <Grid container className={classes.productContainer} spacing={2}>
                {listLazyLoad}
            </Grid>
          :
            <Grid container className={classes.productContainer} spacing={2}>
                {detailProduct.imgDetails[index].imgs.map((item, key)=>{
                  return(
                    <div key={key}>
                      <img className={classes.productImage} src={item.img} />
                    </div>
                  )
                })}
            </Grid>  
        }
      </Hidden> */}

      {/* <Hidden mdUp>
          <Container mdUp>
              <Slider {...settings}>
                  {detailProduct.imgDetails[index].imgs.map((item, key)=>{
                    return (
                      <Card className={classes.image} key={key}>
                          {isLoading ?
                            <Skeleton>
                              <CardActionArea>
                                <CardMedia 
                                  component="img" 
                                  image={item.img}
                                  title="Contemplative Reptile"
                                />
                              </CardActionArea>
                            </Skeleton>  
                            :
                            <CardActionArea>
                              <CardMedia 
                                component="img" 
                                item={item.img}
                                title="Contemplative Reptile"
                              />
                            </CardActionArea>
                        }
                      </Card>
                    )
                  })}
              </Slider>
          </Container>
      </Hidden> */}
    </div>
  )
}

export default ProductImage;