// File: Signup.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaMobile, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SignUp.css';
import login_pic from '../../assets/login_pic.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <Container fluid className="signup-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={10} lg={8} className="signup-box">
          <Row className="shadow-lg rounded overflow-hidden">
            {/* Left Image Section */}
            <Col className="image-section d-flex justify-content-center align-items-center">
                          <Image src={login_pic} alt="Student" fluid className="signup-image" />
                        </Col>

            {/* Right Form Section */}
            <Col md={6} className="form-section px-3 ">
              <h2 className="signup-title fw-bold mb-4">Create Account</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="">
                  <Form.Label className='label-class'>First Name*</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className='input-class'
                      type="text"
                      name="firstName"
                      placeholder="Enter Your First Name..."
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <InputGroup.Text className='input-icon'><FaUser /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="">
                  <Form.Label className='label-class'>Last Name*</Form.Label>
                  <InputGroup>
                  <Form.Control
                    className='input-class'
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name..."
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <InputGroup.Text className='input-icon'></InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="">
                  <Form.Label className='label-class'>Email Address*</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className='input-class'
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail id"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <InputGroup.Text className='input-icon'><FaEnvelope /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="">
                  <Form.Label className='label-class'>Mobile*</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className='input-class'
                      type="tel"
                      name="mobile"
                      placeholder="+91-"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <InputGroup.Text className='input-icon'><FaMobile /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                    <Form.Group className="">
                      <Form.Label className='label-class'>Create Password*</Form.Label>
                      <InputGroup>
                        <Form.Control
                          className='input-class'
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <InputGroup.Text className='input-icon'><FaLock /></InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                 

                <Button className="w-100 mt-2 submit-btn" type="submit">
                  Submit
                </Button>

                <p className="mt-3 signin-move-class fw-semibold">
                  Already a member? <Link to="/" className=" text-decoration-underline">Sign In</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
