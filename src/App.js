import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SideBar from "./components/SideBar/SideBar";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import DashBoard from "./components/DashBoard/DashBoard";
import Courses from './components/Courses/Courses'
import Certificate from "./components/Certificate/Certificate";
import Settings from "./components/Settings/Settings";
import Message from "./components/Message/Message";
import Favourite from "./components/Favourite/Favourite";
import Exam from "./components/Exam/Exam";

const App = () => {
  return (

    <Router>
       
      <Routes>
       
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/sidebar' element={<SideBar/>}>
        <Route path='dashboard' element={<DashBoard/>}/>
        <Route path='courses' element={<Courses/>}/>
        <Route path="certificates" element={<Certificate/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="messages" element={<Message/>}/>
        <Route path="favourites" element={<Favourite/>}/>
        <Route path='exams' element={<Exam/>}/>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
