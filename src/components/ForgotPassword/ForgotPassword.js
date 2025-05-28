import React, { useState, useRef } from 'react';
import './ForgotPassword.css';
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("mobile");
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const otpRefs = useRef([]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if ((method === "email" && email) || (method === "mobile" && mobile)) {
      setStep(2);
    }
  };

  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="forgot-card d-flex flex-column flex-md-row rounded-4 overflow-hidden w-100 mx-auto">
        {/* Image Section */}
        <div className="forgot-image-section w-100 w-md-50"></div>

        {/* Form Section */}
        <div className="forgot-form-section bg-white  flex-grow-1 my-5">

          {step === 1 && (
            <>
              <p className="fw-bold fs-5 mb-2 text-center ">Forgot Password</p>

              {/* Radio Buttons */}
              <div className="mb-3 d-flex gap-5 justify-content-center">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="method"
                    id="mobile"
                    value="mobile"
                    checked={method === "mobile"}
                    onChange={() => setMethod("mobile")}
                  />
                  <label className="form-check-label" htmlFor="mobile">Mobile</label>
                </div>
                <div className="form-check justify-content-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="method"
                    id="email"
                    value="email"
                    checked={method === "email"}
                    onChange={() => setMethod("email")}
                  />
                  <label className="form-check-label" htmlFor="email">E-Mail ID</label>
                </div>
              </div>

              {/* Input Field */}
              <form onSubmit={handleSendOTP}>
                {method === "mobile" && (
                  <div className="form-group my-4">
                    <label className="fcol fw-semibold">Mobile Number</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                      <span className="input-group-text"><FaMobileAlt /></span>
                    </div>
                  </div>
                )}

                {method === "email" && (
                  <div className="form-group my-4">
                    <label className="fcol fw-semibold">Email Address</label>
                    <div className="input-group mb-3 ">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <span className="input-group-text"><FaEnvelope /></span>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary fw-bold w-100">Send OTP</button>
              </form>
            </>
          )}

          {/* Step 2: OTP Entry */}
          {step === 2 && (
            <>
              <p className="text-center text-dark fw-bold fs-5 mb-1">We sent you a code</p>
              <p className="text-center text-muted mb-1">Please enter it below to verify your {method}</p>
              <p className="text-center text-primary mb-4">
                {method === "email" ? email : mobile}
              </p>

              <form className="text-center">
                <div className="d-flex justify-content-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      ref={(el) => otpRefs.current[i] = el}
                      className="form-control text-center fw-bold"
                      style={{
                        width: '45px',
                        height: '45px',
                        fontSize: '1.4rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc'
                      }}
                      onChange={(e) => {
                        if (e.target.value && i < 4) {
                          otpRefs.current[i + 1]?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !e.target.value && i > 0) {
                          otpRefs.current[i - 1]?.focus();
                        }
                      }}
                    />
                  ))}
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
              </form>

              <p className="text-center mt-3">
                Didn’t receive the code?{" "}
                <a href="#" className="fw-bold text-decoration-underline text-primary">Send again</a>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
