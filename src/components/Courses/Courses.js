import React, { useState, useEffect } from "react";
import "./Courses.css";
import { FaFilter,FaChevronRight, FaUserCircle, FaBell, FaChevronDown } from "react-icons/fa";

const Courses = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [startDesignIndex, setStartDesignIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // default to desktop

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    updateCards(); // run initially
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const programmingCourses = [
    {
      id: 1,
      title: "Java Fundamentals",
      description: "Lorem Ipsum is simply dummy text...",
      image: require("../../assets/courses pics/java.jpg"),
    },
    {
      id: 2,
      title: "Python",
      description: "Lorem Ipsum is simply dummy text...",
      image: require("../../assets/courses pics/python.jpg"),
    },
    {
      id: 3,
      title: "React JS",
      description: "Lorem Ipsum is simply dummy text...",
      image: require("../../assets/courses pics/react.jpg"),
    },
    {
      id: 4,
      title: "UI/UX Fundamentals",
      description: "Lorem Ipsum is simply dummy text...",
      image: require("../../assets/courses pics/ui.jpg"),
    },
    {
      id: 5,
      title: "Photoshop",
      description: "Lorem Ipsum is simply dummy text...",
      image: require("../../assets/courses pics/photoshop.jpg"),
    },
  ];

  const designingCourses = [
    {
      title: "UI/UX Fundamentals",
      description: "Lorem Ipsum is simply dummy text...",
      img: require("../../assets/courses pics/ui.jpg"),
    },
    {
      title: "DaVinci Resolve",
      description: "Lorem Ipsum is simply dummy text...",
      img: require("../../assets/courses pics/Davinci.jpg"),
    },
    {
      title: "Photoshop Fundamentals",
      description: "Lorem Ipsum is simply dummy text...",
      img: require("../../assets/courses pics/photoshop.jpg"),
    },
    {
      title: "Figma",
      description: "Lorem Ipsum is simply dummy text...",
      img: require("../../assets/courses pics/figma.jpg"),
    },
    {
      title: "Lightroom",
      description: "Lorem Ipsum is simply dummy text...",
      img: require("../../assets/courses pics/lightroom.jpg"),
    },
  ];

  const getVisibleCourses = (startIndex, sourceArray) => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (startIndex + i) % sourceArray.length;
      visible.push(sourceArray[index]);
    }
    return visible;
  };

  const visibleProgramming = getVisibleCourses(startIndex, programmingCourses);
  const visibleDesigning = getVisibleCourses(startDesignIndex, designingCourses);

  return (
    <div className="courses-wrapper">
      <div className="courses-topbar"></div>

      <div className="container-fluid py-5 px-5">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-6 col-lg-4 d-flex gap-2">
            <input type="text" className="form-control" placeholder="Search course..." />
            <button className="filter-section d-flex align-items-center gap-1">
              <FaFilter /> Filter
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ms-auto d-flex justify-content-md-end gap-3 align-items-center">
            <FaBell className="courses-header-icons" />
            <FaUserCircle className="courses-header-icons" />
            <span className="student-name fw-semibold fs-5">Krishna Varma</span>
            <FaChevronDown className="courses-header-icons" />
          </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5 px-5">
        <h4 className="courses-heading fw-bold ">Courses</h4>

        <h6 className="text-uppercase course-side-heading fw-bold underline-heading mb-3">Programming</h6>
        <div className="courses-slider-container">
          <div className="courses-slider">
            {visibleProgramming.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={course.image} alt={course.title} className="course-img" />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={() => setStartIndex((prev) => (prev + 1) % programmingCourses.length)}>
            <FaChevronRight />
          </button>
        </div>

        <h6 className="text-uppercase course-side-heading fw-bold underline-heading mb-3 mt-5">Designing</h6>
        <div className="courses-slider-container">
          <div className="courses-slider">
            {visibleDesigning.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={course.img} alt={course.title} className="course-img" />
                <div className="course-title">{course.title}</div>
                <div className="course-desc">{course.description}</div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={() => setStartDesignIndex((prev) => (prev + 1) % designingCourses.length)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
