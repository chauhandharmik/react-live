import React  from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

const Common=(props)=>{

    return(
      <>
      <section id="header" className="d-flex align-items-center mt-5">
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-10 mx-auto">
                  <div className="row my-5">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 my-5 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                     {props.name}<strong className="brand-name my-5"> Our Team</strong>
                    </h1> 
                    <h2 className="my-3">
                      We are the team of talented developer making websites
                    </h2>
                    <NavLink class="first-link" to={props.visit}>
                    <div class="blue-btn">                          
                                {props.btname}       
                    </div>
                    </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img my-5">

                  <img src={props.imgsrc} alt="Common imgs" height="300px" width="400px"/>

                </div>
                </div>
            </div>
        </div>
        </div>
        </section>     
      </>
    );
  };

export default Common;
