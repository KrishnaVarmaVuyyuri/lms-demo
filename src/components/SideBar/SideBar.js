import React, { useState } from "react";
import './SideBar.css';
import {
  FaBars, FaTimes, FaHome, FaBook, FaStar,
  FaEdit, FaCertificate, FaEnvelope, FaCog
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    localStorage.removeItem("userData");
    setShowModal(false);
    navigate("/");
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
              <span style={{ color: "rgb(39,32,88)" }}><FaHome /></span> Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="courses" className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaBook /></span> My Course
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to='favourites' className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaStar /></span> Favourite
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to='exams' className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaEdit /></span> Exam
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="certificates" className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaCertificate /></span> Certificate
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to='messages' className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaEnvelope /></span> Message
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to='settings' className="nav-link d-flex align-items-center gap-2">
              <span style={{ color: "rgb(39,32,88)" }}><FaCog /></span> Settings
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="logout px-3 pb-3 mt-auto">
          <button className="btn btn-warning fw-bold w-100" onClick={() => setShowModal(true)}>
            LogOut
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ marginLeft: "210px", marginTop: "60px" }}>
        <Outlet />
      </div>

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow-lg rounded-4 overflow-hidden">
              <div className="modal-header  border-bottom-0">

                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center px-4 py-3">
                <p className="text-muted fs-5 fw-semibold">Are you sure you want to log out from your account?</p>
              </div>
              <div className="modal-footer d-flex justify-content-center gap-3 border-top-0 pb-4">
                <button className="btn btn-secondary px-3 fw-bold" onClick={() => setShowModal(false)}>
                  No, Stay
                </button>
                <button className="btn btn-danger px-3 fw-bold" onClick={handleConfirmLogout}>
                  Yes, Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
