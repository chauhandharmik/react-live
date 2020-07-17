import React  from "react";
import Logo from "./images/logo.jpg";
import "./index.css"
import Common from "./Common";

const Home=()=>{

    return(
      <>
       <Common 
      name='Grow your buisness with Our Team' 
      imgsrc={Logo}
      visit="/service"
      btname="Get Started"
        />
         
      </>
    );
  };

export default Home;
