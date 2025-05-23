import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SideBar from "./components/SideBar/SideBar";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import DashBoard from "./components/DashBoard/DashBoard";
const App = () => {
  return (

    <Router>
       
      <Routes>
       
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/sidebar' element={<SideBar/>}>
        <Route path='dashboard' element={<DashBoard/>}/>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
