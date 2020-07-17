import React  from "react";
import Commmon from './Common.jsx';
import about from './images/about.jpg'

const About=()=>{

    return(
      <>
      <Commmon 
      name='welcome to About page' 
      imgsrc={about}
      visit="/contact"
      btname="Contact Now"
        />

     
      </>
    );
  };

export default About;
