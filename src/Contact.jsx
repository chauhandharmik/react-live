import React from "react";

const Contact = () =>{

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row gy-3">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
  <div class="form-group my-3">
    <label for="exampleInputEmail1">FullName:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="form-group my-3">
    <label for="exampleInputPassword1">Contact:</label>
    <input type="text" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-group my-3">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" class="btn btn-primary text-center">Submit</button>
</form>
                    </div>
                </div>


            </div>
        </>
    );

};

export default Contact;