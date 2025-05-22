import React from "react";
import "./SignIn.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let data = [
    {
      id: 1,
      firstname: "krishna",
      lastname: 'varma',
      email: "varma@gmail.com",
      password: "123",
      phone: 1234567890,
      Id: '567'
    },
    {
      id: 2,
      firstname: "ibrahim",
      lastname: 's',
      email: "ibrahim@gmail.com",
      password: "123",
      phone: 1234567890,
    }
  ]

  let handleSubmit = (e) => {
    e.preventDefault();

    const user = data.find(user => user.email === email && user.password === password);

    if (user) {
      // Store only the logged-in user's details
      const userDataToStore = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone
      };
      localStorage.setItem("userData", JSON.stringify(userDataToStore));
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => navigate("/dashboard"), 3000);
    } else {
      toast.error('Invalid Credentials', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100 px-3">
      <ToastContainer />
      <div className="signin-card d-flex flex-column flex-md-row rounded-5 overflow-hidden w-100 mx-auto">
        {/* Image Section - full width on small, 50% on md+ */}
        <div className="signin-image-section w-100 w-md-50"></div>

        {/* Form Section */}
        <div className="signin-form-section bg-white p-4 p-md-5 flex-grow-1">
          <div className="text-start head-text mb-4">
            <p className="fw-bold">Let the Journey Begin!</p>
            <p className="fw-bold">
              Unlock a world of education with a single click! Please login to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="fields fw-semibold mb-2">Email Address</label>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                  aria-describedby="email-icon"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text" id="email-icon">
                  <FaEnvelope />
                </span>
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="fields fw-semibold mb-2">Password</label>
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter your password"
                  aria-label="Password"
                  aria-describedby="password-icon"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text" id="password-icon">
                  <FaLock />
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <Link to="/forgot-password" className="text-primary fw-bold text-decoration-none">
                Forgot Password?
              </Link>
            </div>



            <button type="submit" className="btn btn-primary w-100 fw-bold">Login</button>
          </form>

          <p className="mt-3 fw-bold">
            Don't have an Account? <Link to="/signup" className="text-primary text-decoration-none">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;