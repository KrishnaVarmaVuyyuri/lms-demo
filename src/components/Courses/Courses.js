import React, { useState } from "react";
import "./Courses.css";
import {
  FaFilter,
  FaArrowRight,
  FaArrowLeft,
  FaUserCircle,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";
import pic1 from "../../assets/login2.jpg"; // placeholder image

const Courses = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [startDesignIndex, setStartDesignIndex] = useState(0);

  const programmingCourses = [
    {
      id: 1,
      title: "Java Fundamentals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.",
      image: "/images/java.png",
    },
    {
      id: 2,
      title: "Python",
      description:
        "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.",
      image: "/images/python.png",
    },
    {
      id: 3,
      title: "React JS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.",
      image: "/images/react.png",
    },
    {
      id: 4,
      title: "UI/UX Fundamentals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.",
      image: "/images/uiux.png",
    },
    {
      id: 5,
      title: "Photoshop",
      description:
        "Lorem Ipsum is simply dummy text of the printing and the typesetting industry.",
      image: "/images/photoshop.png",
    },
  ];

  const designingCourses = [
    { title: "UI/UX Fundamentals", img: "/images/uiux.png" },
    { title: "DaVinci Resolve", img: "/images/davinci.png" },
    { title: "Photoshop Fundamentals", img: "/images/photoshop.png" },
    { title: "Figma", img: "/images/figma.png" },
     { title: "Photoshop Fundamentals", img: "/images/photoshop.png" },
  ];

  const handleNext = () => {
    if (startIndex + 3 < programmingCourses.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleDesignNext = () => {
    if (startDesignIndex + 3 < designingCourses.length) {
      setStartDesignIndex((prev) => prev + 1);
    }
  };

  const handleDesignPrev = () => {
    if (startDesignIndex > 0) {
      setStartDesignIndex((prev) => prev - 1);
    }
  };

  const visibleCourses = programmingCourses.slice(startIndex, startIndex + 3);
  const visibleDesigning = designingCourses.slice(
    startDesignIndex,
    startDesignIndex + 3
  );

  return (
    <div className="courses-wrapper">
      {/* Top Navigation */}
      <div className="courses-topbar"></div>
      <div className="container-fluid py-5 px-5">
        <div className="row align-items-center g-3 px-3">
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
            <span className="fw-semibold fs-5">Krishna Varma</span>
            <FaChevronDown className="header-icons" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid px-5">
        <h5 className="fw-bold px-3">Courses</h5>

        {/* Programming Section */}
        <div className="courses-slider-container">
          {startIndex > 0 && (
            <button className="prev-btn" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
          )}
          <div className="courses-slider">
            {visibleCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <img
                  src={pic1}
                  alt={course.title}
                  className="course-img"
                />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          {startIndex + 3 < programmingCourses.length && (
            <button className="next-btn" onClick={handleNext}>
              <FaArrowRight />
            </button>
          )}
        </div>

        {/* Designing Section */}
        <div className="category-section">
          <h6 className="text-uppercase text-purple fw-bold underline-heading mb-3">
            Designing
          </h6>
          <div className="courses-slider-container">
          {startDesignIndex > 0 && (
            <button className="prev-btn" onClick={handleDesignPrev}>
              <FaArrowLeft />
            </button>
          )}
          <div className="courses-slider">
            {visibleDesigning.map((course) => (
              <div className="course-card" key={course.id}>
                <img
                  src={pic1}
                  alt={course.title}
                  className="course-img"
                />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          {startDesignIndex + 3 < designingCourses.length && (
            <button className="next-btn" onClick={handleDesignNext}>
              <FaArrowRight />
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
