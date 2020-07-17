import React  from "react";
import img from "./images/1.png";

const Card =(props) =>{

    return(
        <>
        <div className="col-md-4 col- mx-auto">
        <div className="card" >
                        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} height="250px" width="200px"/>
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{props.title}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="-" className="btn btn-primary">Go somewhere</a>
                        </div>
        </div>
        </div>
        </>
    );
};

export default Card;