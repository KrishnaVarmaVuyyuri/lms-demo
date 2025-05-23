import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  return (
    <div className="bg-primary d-flex align-items-center justify-content-center min-vh-100 px-3">
      <div className="forgot-card d-flex flex-column flex-md-row rounded-4 overflow-hidden w-100 mx-auto">
        {/* Image Section */}
        <div className="forgot-image-section w-100 w-md-50"></div>

        {/* Form Section */}
        <div className="forgot-form-section bg-white  flex-grow-1">
       

          {/* Step 1: Enter Email */}
          {step === 1 && (
            <>
              <p className="text-center fw-bold fs-5 mt-5">Forgot Password</p>
              <p className="text-center text-muted mt-0">
                Enter your registered email to reset your password.
              </p>
              <form onSubmit={handleSendOTP}>
                <div className="mt-5">
                  <label className="form-label  fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold mt-3">Send OTP</button>
              </form>
            </>
          )}

          {/* Step 2: Enter OTP */}
          {step === 2 && (
            <>
              <p className="text-center text-dark fw-bold mt-5 mb-0">We sent you a code</p>
              <p className="text-center text-muted mb-0">Please enter it below to verify your email</p>
              <p className="text-center text-primary">{email}</p>
              <form>
                <div className="mt-5">
                  <input type="text" className="form-control" placeholder="Enter your OTP" required />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold mt-3">Submit</button>
              </form>
              <p className="text-center mt-3">
                Don’t received code yet?{" "}
                <a href="#" className="fw-bold text-decoration-underline mt-3 text-primary">Send again</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
