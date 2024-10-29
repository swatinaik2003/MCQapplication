
// src/components/StudentDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <h2>Student Application</h2> {/* Sidebar heading */}
        <ul>
          <li>
            <Link to="/studentdashboard" className="sidebar-button">Student Dashboard</Link>
          </li>
          <li>
            <Link to="/join-course" className="sidebar-button">Join Course</Link>
          </li>
          <li>
            <Link to="/my-exam" className="sidebar-button">My Exam</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <p>Welcome to your dashboard! Select an option from the sidebar.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
