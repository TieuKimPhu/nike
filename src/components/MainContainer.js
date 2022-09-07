import React from 'react'
import Container from "@mui/material/Container";
import Body from "./body/Body";
import Footer from './body/bodyComponent/Footer';
import Header from './body/bodyComponent/Header';
import Navbar from './body/bodyComponent/Navbar';

function MainContainer(props) {
  return (
    <React.Fragment>
      {/* <CssBaseline/> */}
      {/* <Header/> */}
      {/* <Navbar/> */}
      <Container maxWidth="xl">
          <Body
            titleTrending={props.titleTrending}
            dataTrending={props.dataTrending}
            titleMoreNike={props.titleMoreNike}
            dataMoreNike={props.dataMoreNike}
            merchMenu={props.merchMenu}
          />
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
export default MainContainer;