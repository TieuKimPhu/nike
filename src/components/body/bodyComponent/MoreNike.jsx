import { Grid } from '@mui/material';
import React from 'react'
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme)=>({
    title: {
        fontSize: "25px",
        marginTop: "50px",
        // fontFamily: "'Baloo Bhaijaan 2', cursive",
        fontFamily: "'Baloo Bhaijaan 2', cursive",
        fontFamily: "'Rubik Glitch', cursive",
    },
    contentLink: {
        color: "black",
        textDecoration: "none",
    },
    moreNikeContainer: {
        // height: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "relative",
      },
    shopLink: {
        textDecoration: "none",
        margin: "0 8px 8px 0",
        padding: "8px 28px",
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        position: "absolute",
        bottom: "130px",
        left: "50px",
        // marginBottom: "-50px",
        "&:hover": {
          backgroundColor: "gray",
        },
      },
    boxImg: {
        marginBottom: "100px",
    },
      imgStyle: {
        width: "100%",
        height: "100%",
      },
}))

function MoreNike(props) {
    const {classes} = useStyles();
    return (
        <>
            <div className={classes.title}>{props.titleMoreNike}</div> 
            <Grid container spacing={3}>
                {props.dataMoreNike?.map((item, index)=>{
                    return (
                        <Grid item xs={12} sm={4} key={index}>
                            <div className={classes.moreNikeContainer}>
                                <div className={classes.boxImg}>
                                    <img className={classes.imgStyle} src={item.img}/>
                                    <a href="#a" className={classes.shopLink}>
                                        {item.titleButton}
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>  
        </>
  )
}

export default MoreNike;