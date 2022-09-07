import React from 'react';
import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()((theme) => ({
    navbar: {
        width: "100%",
        height: "36px",
        backgroundColor: "#f5f5f5",
        // backgroundColor: "blue",
        // padding: "8px 30px",
        position: "relative",
    },

}))
function Navbar(props) {
    const {classes} = useStyles();
    return (
        <div>
            
        </div>
  )
}

export default Navbar;