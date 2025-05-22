import React, { useState } from "react";
import './SideBar.css';
import {
  FaBars, FaTimes, FaHome, FaUniversity,
  FaBook, FaStar, FaEdit, FaCertificate, FaEnvelope, FaCog
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "My Course", icon: <FaBook /> },
  { label: "Favourite", icon: <FaStar /> },
  { label: "Exam", icon: <FaEdit /> },
  { label: "Certificate", icon: <FaCertificate /> },
  { label: "Message", icon: <FaEnvelope /> },
  { label: "Settings", icon: <FaCog /> },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex">
      {/* Toggle Button */}
      <button className="toggle-btn btn fs-4" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "d-flex" : "d-none"} flex-column`}>
        

        {/* Navigation */}
        <ul className="nav flex-column px-3">
          {menuItems.map((item) => (
            <li className="nav-item mb-2" key={item.label}>
              <a href="#" className="nav-link d-flex align-items-center gap-2">
               <span style={{color: "rgb(39,32,88)"}}>{item.icon}</span> 
               {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="logout px-3 pb-3 mt-auto">
          <button className="btn btn-warning fw-bold w-100">LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
