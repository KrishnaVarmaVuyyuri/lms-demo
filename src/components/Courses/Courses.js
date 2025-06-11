// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button
// } from "react-bootstrap";
// import {
//   FaFilter,
//   FaChevronRight,
//   FaUserCircle,
//   FaBell,
//   FaChevronDown,
// } from "react-icons/fa";
// import { InputGroup } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import "./Courses.css";

// const Courses = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [startDesignIndex, setStartDesignIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(3);

//   useEffect(() => {
//     const updateCards = () => {
//       setCardsPerView(window.innerWidth < 768 ? 1 : 3);
//     };

//     updateCards();
//     window.addEventListener("resize", updateCards);
//     return () => window.removeEventListener("resize", updateCards);
//   }, []);

//   const programmingCourses = [
//     { id: 1, title: "Java Fundamentals", description: "Lorem Ipsum...", image: require("../../assets/courses pics/java.jpg") },
//     { id: 2, title: "Python", description: "Lorem Ipsum...", image: require("../../assets/courses pics/python.jpg") },
//     { id: 3, title: "React JS", description: "Lorem Ipsum...", image: require("../../assets/courses pics/react.jpg") },
//     { id: 4, title: "UI/UX", description: "Lorem Ipsum...", image: require("../../assets/courses pics/ui.jpg") },
//     { id: 5, title: "Photoshop", description: "Lorem Ipsum...", image: require("../../assets/courses pics/photoshop.jpg") },
//   ];

//   const designingCourses = [
//     { title: "UI/UX", description: "Lorem Ipsum...", img: require("../../assets/courses pics/ui.jpg") },
//     { title: "DaVinci", description: "Lorem Ipsum...", img: require("../../assets/courses pics/Davinci.jpg") },
//     { title: "Photoshop", description: "Lorem Ipsum...", img: require("../../assets/courses pics/photoshop.jpg") },
//     { title: "Figma", description: "Lorem Ipsum...", img: require("../../assets/courses pics/figma.jpg") },
//     { title: "Lightroom", description: "Lorem Ipsum...", img: require("../../assets/courses pics/lightroom.jpg") },
//   ];

//   const getVisibleCourses = (start, list) => {
//     const visible = [];
//     for (let i = 0; i < cardsPerView; i++) {
//       const idx = (start + i) % list.length;
//       visible.push(list[idx]);
//     }
//     return visible;
//   };

//   const visibleProgramming = getVisibleCourses(startIndex, programmingCourses);
//   const visibleDesigning = getVisibleCourses(startDesignIndex, designingCourses);

//   return (
//     <div className="student-courses-wrapper">
//       <div className="student-courses-topbar"></div>

//       <Container fluid className="py-5 px-5 student-container-fluid">
//         <Row className="align-items-center g-3">
//           <Col xs={12} md={6} lg={4} className="d-flex gap-3">
//             <InputGroup>
//               <InputGroup.Text className="bg-white border-end-0">
//                 <FaSearch />
//               </InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="Search course..."
//                 className="border-start-0 student-course-search-box"
//               />
//             </InputGroup>
//             <Button  variant="light" className="student-filter-section d-flex align-items-center gap-1">
//               <FaFilter  /> Filter
//             </Button>
//           </Col>
//           <Col xs={12} md={6} lg={4} className="ms-auto d-flex justify-content-md-end gap-3 align-items-center">
//             <FaBell className="student-courses-header-icons" />
//             <FaUserCircle className="student-courses-header-icons" />
//             <span className="student-name fw-semibold fs-5">Krishna Varma</span>
//             <FaChevronDown className="student-courses-header-icons" />
//           </Col>
//         </Row>
//       </Container>

//       <Container fluid className="py-5 px-5 student-container-fluid"  >
//         <h4 className="student-courses-heading fw-bold">Courses</h4>

//         <h6 className="text-uppercase student-course-side-heading fw-bold student-underline-heading mb-3">Programming</h6>
//         <div className="student-courses-slider-container">
//           <div className="student-courses-slider">
//             {visibleProgramming.map((course, idx) => (
//               <div className="student-course-card" key={idx}>
//                 <img src={course.image} alt={course.title} className="student-course-img" />
//                 <div className="student-course-title">{course.title}</div>
//                 <div className="student-course-desc">{course.description}</div>
//               </div>
//             ))}
//           </div>
//           <button className="student-course-next-btn" onClick={() => setStartIndex((prev) => (prev + 1) % programmingCourses.length)}>
//             <FaChevronRight />
//           </button>
//         </div>

//         <h6 className="text-uppercase student-course-side-heading fw-bold student-underline-heading mb-3 mt-5">Designing</h6>
//         <div className="student-courses-slider-container">
//           <div className="student-courses-slider">
//             {visibleDesigning.map((course, idx) => (
//               <div className="student-course-card" key={idx}>
//                 <img src={course.img} alt={course.title} className="student-course-img" />
//                 <div className="student-course-title">{course.title}</div>
//                 <div className="student-course-desc">{course.description}</div>
//               </div>
//             ))}
//           </div>
//           <button className="student-course-next-btn" onClick={() => setStartDesignIndex((prev) => (prev + 1) % designingCourses.length)}>
//             <FaChevronRight />
//           </button>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Courses;
import React, { useState } from 'react';
import './Courses.css';
import {

  FaChevronRight

} from "react-icons/fa";
import java from '../../assets/courses pics/java.jpg';
import python from '../../assets/courses pics/python.jpg';
import react from '../../assets/courses pics/react.jpg';
import node from '../../assets/courses pics/node.jpg';
import cpp from '../../assets/courses pics/c++.png';

import ui from '../../assets/courses pics/ui.jpg';
import photoshop from '../../assets/courses pics/photoshop.jpg';
import davinci from '../../assets/courses pics/Davinci.jpg';
import lightroom from '../../assets/courses pics/lightroom.jpg';
import figma from '../../assets/courses pics/figma.jpg';

const Courses = () => {
  const programmingCourses = [
    { title: 'Java Fundamentals', image: java, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'Python', image: python, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'React JS', image: react, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'Node.js', image: node, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'C++ Basics', image: cpp, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
  ];

  const designingCourses = [
    { title: 'UI/UX Fundamentals', image: ui, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'DaVinci Resolve', image: davinci, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'Photoshop Basics', image: photoshop, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'Figma Mastery', image: figma, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
    { title: 'Canva Essentials', image: lightroom, description: 'orem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry' },
  ];

  const [progIndex, setProgIndex] = useState(0);
  const [designIndex, setDesignIndex] = useState(0);

  const handleNext = (type, length) => {
    if (type === 'programming') {
      setProgIndex((prev) => (prev + 1) % length);
    } else {
      setDesignIndex((prev) => (prev + 1) % length);
    }
  };

  const getVisible = (courses, start) => {
    const total = courses.length;
    return [
      courses[start % total],
      courses[(start + 1) % total],
      courses[(start + 2) % total],
    ];
  };

  return (
    <div className="courses-wrapper container-fluid py-5">
      {/* Programming Section */}
      <div className="course-section mb-5  ">
        <h5 className="section-title mb-3">PROGRAMMING</h5>
        <div className="slider-row">
          {getVisible(programmingCourses, progIndex).map((course, idx) => (
            <div className="slider-card" key={idx}>
              <div className="course-card shadow-sm ">
                <img src={course.image} alt={course.title} className="course-card-img" />
                <div className="">
                  <h6 className="course-title-heading">{course.title}</h6>
                  <p className="m-0 px-2 py-2">{course.description}</p>
                  <div className='course-card-buy-section'><a href='#'>BUY NOW</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="section-arrow"
          onClick={() => handleNext('programming', programmingCourses.length)}
        >
          <FaChevronRight />
        </div>
      </div>

      {/* Designing Section */}
      <div className="course-section mb-5">
        <h5 className="section-title mb-3">DESIGNING</h5>
        <div className="slider-row">
          {getVisible(designingCourses, designIndex).map((course, idx) => (
            <div className="slider-card" key={idx}>
              <div className="course-card shadow-sm h-100">
                <img src={course.image} alt={course.title} className="course-card-img" />
                <div className="">
                  <h6 className="course-title-heading">{course.title}</h6>
                  <p className='m-0 px-2 py-2'>{course.description}</p>
                  <div className='course-card-buy-section'><a href='#'>BUY NOW</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="section-arrow"
          onClick={() => handleNext('designing', designingCourses.length)}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Courses;
