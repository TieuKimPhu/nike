import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme)=>({
    hello: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
    },
    root: {
        width: "860px",
        margin: "50px auto",
        display: "block",
        textAlign: "center",
        margin: "0",
        // backgroundColor: "yellow",
        "&:hover": {
        cursor: "pointer",
        }
    },
    textSmall: {
        marginTop: "-25px",
    },
    textBig: {
        fontSize: "65px",
        fontFamily: "'Pacifico', cursive",
        fontFamily: "'Special Elite', cursive",
        fontFamily: "'Titan One', cursive",
        fontWeight: "bolder",
        marginTop: "-20px",
    },
    button: {
        height: "30px",
        width: "80px",
        backgroundColor: "black",
        borderRadius: "50px",
        textDecoration: "none",
        padding: "2px 15px",
        margin: "10px auto",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "gray",
            // transition: "all 0.2s linear-gradient",
        }
    },
    textButton: {
        color: "white",
        textDecoration: "none",
        fontSize: "15px",
    }
}))

const Title = (props) => {
  const { topTitle, bottomTitle, middleTitle, linkText } = props 
  const {classes} = useStyles();
  return (
      <div className={classes.hello}>
    <div className={classes.root}>
        <p className={classes.textSmall}>{topTitle}</p>
        <h1 className={classes.textBig}>{middleTitle}</h1>
        <p className={classes.textSmall}>{bottomTitle}</p>
        <div className={classes.button}> 
            <Link to={linkText} className={classes.textButton}>Shop</Link>
        </div>
    </div>
    </div>
  )
}

export default Title;