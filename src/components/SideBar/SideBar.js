import React, { useState } from "react";
import './SideBar.css';
import {
  FaBars, FaTimes, FaHome, FaBook, FaStar,
  FaEdit, FaCertificate, FaEnvelope, FaCog
} from "react-icons/fa";
import { Link, Outlet , useNavigate} from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");     // Clear user session
    navigate("/");                           // Redirect to login
  };

  return (
    <>
      {/* Toggle Button */}
      <button className="toggle-btn btn fs-4" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'show' : 'hide'} flex-column`}>
        <ul className="nav flex-column px-3 mt-4">
          <li className="nav-item mb-2">
            <Link to="dashboard" className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaHome /></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaBook /></span>
              My Course
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaStar /></span>
              Favourite
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaEdit /></span>
              Exam
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaCertificate /></span>
              Certificate
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaEnvelope /></span>
              Message
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link  className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaCog /></span>
              Settings
            </Link>
          </li>
        </ul>

        <div className="logout px-3 pb-3 mt-auto">
      <button className="btn btn-warning fw-bold w-100" onClick={handleLogout}>
        LogOut
      </button>
    </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ marginLeft: "210px", marginTop: "60px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default SideBar;
