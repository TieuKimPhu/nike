import { makeStyles } from '@mui/styles';
import React from 'react';
import imgCarousel from "../../../assets/Carousel.png"
import Container from '@mui/material/Container';
import { maxWidth } from '@mui/system';
import Title from './Title';

const useStyles = makeStyles({
    image: {
        maxHeight: "100%",
        maxWidth: "100%",
    }
  });

const Carousel = () => {
const classes = useStyles();
  return (
    <React.Fragment>
        <img src={imgCarousel} alt="this is picture" className={classes.image} />
        <Title  topTitle="Member Access: Nike Air Zoom Pegasus 39" 
                middleTitle="IN PEG WE TRUST" 
                bottomTitle="Introducing the new Nike Air Zoom Pegasus 39, featuring the comfort and consistency from the shoe runners know and love, plus our latest innovations designed to take your next run to bold new heights."
                linkText="/link"
        />
    </React.Fragment>
  )
}

export default Carousel;