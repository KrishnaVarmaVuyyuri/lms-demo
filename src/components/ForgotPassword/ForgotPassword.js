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
      <div className="forgot-card d-flex flex-column flex-md-row rounded-5 overflow-hidden w-100 mx-auto">
        {/* Image Section */}
        <div className="forgot-image-section w-100 w-md-50"></div>

        {/* Form Section */}
        <div className="forgot-form-section bg-white p-4 p-md-5 flex-grow-1">
         

          {/* Step 1: Enter Email */}
          {step === 1 && (
            <>
              <p className="text-center fw-bold fs-5">Forgot Password</p>
              <p className="text-center text-muted mb-4">
                Enter your registered email to reset your password.
              </p>
              <form onSubmit={handleSendOTP}>
                <div className="mb-3">
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
                <button type="submit" className="btn btn-primary w-100 fw-bold">Send OTP</button>
              </form>
            </>
          )}

          {/* Step 2: Enter OTP */}
          {step === 2 && (
            <>
              <p className="text-center text-dark fw-bold">We sent you a code</p>
              <p className="text-center text-muted">Please enter it below to verify your email</p>
              <p className="text-center text-primary">{email}</p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Enter your OTP" required />
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold">Submit</button>
              </form>
              <p className="text-center mt-3">
                Don’t received code yet?{" "}
                <a href="#" className="fw-bold text-decoration-none">send again</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
