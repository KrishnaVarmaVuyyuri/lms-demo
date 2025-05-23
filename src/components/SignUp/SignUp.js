import React from "react";
import "./SignUp.css";
import { FaLock, FaMobile, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100 px-3">
  <div className="signup-card d-flex flex-column flex-md-row rounded-4  w-100 mx-auto">
        {/* Image Section */}
        <div className="signup-image-section w-100 w-md-50 "></div>

        {/* Form Section */}
        <div className="signup-form-section bg-white flex-grow-1">
          
          <form>
            
            <div className="mt-4">
              <label className="fields fw-semibold mb-2">First Name*</label>
              <div className="input-group">
                <input type="text" className="form-control p-1" placeholder="Enter your First Name" required/>
                <span className="input-group-text"><FaUser /></span>
              </div>
            </div>

            <div className=" mb-2">
              <label className="fields fw-semibold mb-2 mt-2">Last Name*</label>
              <input type="text" className="form-control p-1" placeholder="Enter your Last Name" required/>
            </div>

            <div className=" mb-2">
              <label className="fields fw-semibold mb-2">Email Address*</label>
              <input type="email" className="form-control p-1" placeholder="Enter your email" required/>
            </div>

            <div className=" mb-2">
              <label className="fields fw-semibold mb-2">Mobile*</label>
              <div className="input-group">
                <input type="text" className="form-control p-1" placeholder="Enter your Mobile Number" required/>
                <span className="input-group-text"><FaMobile /></span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <label className="fields fw-semibold mb-2">Create Password*</label>
                <div className="input-group">
                  <input type="password" className="form-control p-1" placeholder="Password" required/>
                  <span className="input-group-text"><FaLock /></span>
                </div>
              </div>

              <div className="col-md-6 mb-2">
                <label className="fields fw-semibold mb-2">Confirm Password*</label>
                <div className=" input-group">
                  <input type="password" className="form-control p-1" placeholder="Confirm Password" required/>
                  <span className="input-group-text"><FaLock /></span>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
          </form>

          <p className="mt-3 fw-bold">
            Already a member? <Link to="/" className="text-primary text-decoration-underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;