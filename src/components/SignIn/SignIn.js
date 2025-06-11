import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login_pic from '../../assets/login_pic.png'; // Update the path if needed

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = [
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
      firstname: "Sai",
      lastname: 'm',
      email: "sai@gmail.com",
      password: "123",
      phone: 1234567890,
      Id: '568'
    },
    {
      id: 3,
      firstname: "ibrahim",
      lastname: 's',
      email: "ibrahim@gmail.com",
      password: "123",
      phone: 1234567890,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = data.find(user => user.email === email && user.password === password);

    if (user) {
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
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => navigate("/sidebar/dashboard"), 1000);
    } else {
      toast.error('Invalid Credentials', {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Container fluid className="signin-container">
      <ToastContainer />
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={10} lg={8} className="signin-box">
          <Row className="shadow-lg rounded overflow-hidden">
            <Col className="image-section d-flex justify-content-center align-items-center">
              <Image src={login_pic} alt="Student" fluid className="signin-image" />
            </Col>

            <Col md={6} className="form-section px-3 my-4">
              <p className='fw-semibold fs-5'>Company Logo</p>
              <p className='fw-bold fs-4 mb-2'>Let the Journey Begin!</p>
              <p>Unlock a world of education with a single click! Please login to your account.</p>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label className='label-class'>Email Address</Form.Label>
                  <InputGroup className='mb-2'>
                    <Form.Control
                      className='input-class'
                      type="email"
                      placeholder="Enter your e-mail id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <InputGroup.Text className='input-icon'><FaEnvelope /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className='label-class'>Password</Form.Label>
                  <InputGroup className='mb-2'>
                    <Form.Control
                      className='input-class'
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Type here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <InputGroup.Text className='input-icon' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                    <InputGroup.Text className='input-icon'><FaLock /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <div className='fw-bold text-end mb-2'>
                  <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                </div>

                <Button className="w-100 mt-3 submit-btn" type="submit">
                  Login
                </Button>

                <p className="mt-2">
                  <span className="signin-move-class">Don't have an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
