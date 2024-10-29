
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Get the current path

  // State to hold checkbox status for each section (optional, based on your needs)
  const [checkedItems, setCheckedItems] = useState({
    curriculums: false,
    courses: false,
    mcqExams: false,
    students: false,
  });

  // Handle checkbox change (optional, based on your needs)
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div className="sidebar-container">
      {/* MCQ Application header box */}
      <div className="sidebar-box mcq-header">
        <h1>MCQ Application</h1>
      </div>

      {/* Dashboard box */}
      <div className="sidebar-section">
        <label className={`sidebar-link ${currentPath === '/dashboard' ? 'active' : ''}`}>
          <input
            type="checkbox"
            name="dashboard"
            checked={checkedItems.curriculums}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Dashboard</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* Curriculums box */}
      <div className="sidebar-section">
        <label className={`sidebar-link ${currentPath === '/dashboard/curriculums' ? 'active' : ''}`}>
          <input
            type="checkbox"
            name="curriculums"
            checked={checkedItems.curriculums}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/curriculums" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Curriculums</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* Courses box */}
      <div className="sidebar-section">
        <label className={`sidebar-link ${currentPath === '/dashboard/courses' ? 'active' : ''}`}>
          <input
            type="checkbox"
            name="courses"
            checked={checkedItems.courses}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/courses" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Courses</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* MCQ Exams box */}
      <div className="sidebar-section">
        <label className={`sidebar-link ${currentPath === '/dashboard/mcq-exams' ? 'active' : ''}`}>
          <input
            type="checkbox"
            name="mcqExams"
            checked={checkedItems.mcqExams}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/mcq-exams" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>MCQ Exams</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* Students box */}
      <div className="sidebar-section">
        <label className={`sidebar-link ${currentPath === '/dashboard/students' ? 'active' : ''}`}>
          <input
            type="checkbox"
            name="students"
            checked={checkedItems.students}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/students" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Students</h4>
            </div>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
