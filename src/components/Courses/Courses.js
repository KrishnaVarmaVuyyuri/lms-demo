import React, { useState } from "react";
import "./Courses.css";
import {
  FaFilter,
  FaArrowRight,
  FaUserCircle,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";
import pic1 from "../../assets/login2.jpg"; // Placeholder image

const Courses = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [startDesignIndex, setStartDesignIndex] = useState(0);

  const programmingCourses = [
    { id: 1, title: "Java Fundamentals", description: "Lorem Ipsum is simply dummy text...", image: "/images/java.png" },
    { id: 2, title: "Python", description: "Lorem Ipsum is simply dummy text...", image: "/images/python.png" },
    { id: 3, title: "React JS", description: "Lorem Ipsum is simply dummy text...", image: "/images/react.png" },
    { id: 4, title: "UI/UX Fundamentals", description: "Lorem Ipsum is simply dummy text...", image: "/images/uiux.png" },
    { id: 5, title: "Photoshop", description: "Lorem Ipsum is simply dummy text...", image: "/images/photoshop.png" },
  ];

  const designingCourses = [
    { title: "UI/UX Fundamentals", description: "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.", img: "/images/uiux.png" },
    { title: "DaVinci Resolve", description: "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.", img: "/images/davinci.png" },
    { title: "Photoshop Fundamentals", description: "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.", img: "/images/photoshop.png" },
    { title: "Figma", description: "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.", img: "/images/figma.png" },
    { title: "Lightroom", description: "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.", img: "/images/lightroom.png" },
  ];

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % programmingCourses.length;
    setStartIndex(nextIndex);
  };

  const handleDesignNext = () => {
    const nextIndex = (startDesignIndex + 1) % designingCourses.length;
    setStartDesignIndex(nextIndex);
  };

  const visibleCourses = [];
  for (let i = 0; i < 3; i++) {
    const index = (startIndex + i) % programmingCourses.length;
    visibleCourses.push(programmingCourses[index]);
  }

  const visibleDesigning = [];
  for (let i = 0; i < 3; i++) {
    const index = (startDesignIndex + i) % designingCourses.length;
    visibleDesigning.push(designingCourses[index]);
  }
  return (
    <div className="courses-wrapper">
      {/* Top Navigation */}
      <div className="courses-topbar"></div>
      <div className="container-fluid py-5 px-5">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-6 col-lg-4 d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search course..."
            />
            <button className="filter-section d-flex align-items-center gap-1">
              <FaFilter /> Filter
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ms-auto d-flex justify-content-md-end gap-3 align-items-center">
            <FaBell className="header-icons" />
            <FaUserCircle className="header-icons" />
            <span className="student-name fw-semibold fs-5">Krishna Varma</span>
            <FaChevronDown className="header-icons" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h4 className="courses-head fw-bold mb-4">Courses</h4>

        {/* Programming Section */}
        <h6 className="text-uppercase text-purple fw-bold underline-heading mb-3">
          Programming
        </h6>
        <div className="courses-slider-container">
          <div className="courses-slider">
            {visibleCourses.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={pic1} alt={course.title} className="course-img" />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>

        {/* Designing Section */}
        <h6 className="text-uppercase text-purple fw-bold underline-heading mb-3 mt-5">
          Designing
        </h6>
        <div className="courses-slider-container">
          <div className="courses-slider">
            {visibleDesigning.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={pic1} alt={course.title} className="course-img" />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleDesignNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
