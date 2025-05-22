import React from "react";
import "./SignUp.css";
import { FaLock, FaMobile, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100 ">
      <div className="signup-card d-flex flex-column flex-md-row rounded-5 overflow-hidden w-100 mx-auto">
        {/* Image Section */}
        <div className="signup-image-section w-100 w-md-50"></div>

        {/* Form Section */}
        <div className="signup-form-section bg-white p-4 p-md-5 flex-grow-1">
          

          <form>
            <div className=" mb-3">
              <label className="fields fw-semibold mb-2">First Name*</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your First Name" />
                <span className="input-group-text"><FaUser /></span>
              </div>
            </div>

            <div className=" mb-3">
              <label className="fields fw-semibold mb-2">Last Name*</label>
              <input type="text" className="form-control" placeholder="Enter your Last Name" />
            </div>

            <div className=" mb-3">
              <label className="fields fw-semibold mb-2">Email Address*</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className=" mb-3">
              <label className="fields fw-semibold mb-2">Mobile*</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your Mobile Number" />
                <span className="input-group-text"><FaMobile /></span>
              </div>
            </div>

            <div className=" mb-3">
              <label className="fields fw-semibold mb-2">Create Password*</label>
              <div className="input-group">
                <input type="password" className="form-control" placeholder="Password" />
                <span className="input-group-text"><FaLock /></span>
              </div>
            </div>

            <div className="mb-3">
              <label className="fields fw-semibold mb-2">Confirm Password*</label>
              <div className="input-group">
                <input type="password" className="form-control" placeholder="Confirm Password" />
                <span className="input-group-text"><FaLock /></span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
          </form>

          <p className="mt-3 fw-bold text-center">
            Already a member? <Link to="/" className="text-primary text-decoration-none">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;