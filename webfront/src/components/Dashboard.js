
// src/components/Dashboard.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard'); // Default to show dashboard welcome message

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when clicked
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>MCQ Application</h1>
        
        <nav>
          <ul>
            <li>
              <Link 
                to="/dashboard" 
                className={activeLink === 'dashboard' ? 'active' : ''} 
                onClick={() => handleLinkClick('dashboard')}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="curriculums" 
                className={activeLink === 'curriculums' ? 'active' : ''} 
                onClick={() => handleLinkClick('curriculums')}
              >
                Curriculums
              </Link>
            </li>
            <li>
              <Link 
                to="courses" 
                className={activeLink === 'courses' ? 'active' : ''} 
                onClick={() => handleLinkClick('courses')}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="mcq-exams" 
                className={activeLink === 'mcq-exams' ? 'active' : ''} 
                onClick={() => handleLinkClick('mcq-exams')}
              >
                MCQ Exams
              </Link>
            </li>
            <li>
              <Link 
                to="students" 
                className={activeLink === 'students' ? 'active' : ''} 
                onClick={() => handleLinkClick('students')}
              >
                Students
              </Link>
            </li>
            <li>
              <Link 
                to="my-exam" 
                className={activeLink === 'my-exam' ? 'active' : ''} 
                onClick={() => handleLinkClick('my-exam')}
              >
                My Exams
              </Link>
            </li>
          </ul>
        </nav>

        <div className="logout-container">
          <Link to="/login" className="logout-button">
            Logout
          </Link>
        </div>
      </aside>

      <main className="content">
        {activeLink === 'dashboard' ? (
          <div className="welcome-message">
            <h2>Welcome to Dashboard</h2>
            <p>Your dashboard overview will be here.</p>
          </div>
        ) : (
          <Outlet /> // Render nested routes for other links
        )}
      </main>
    </div>
  );
};

export default Dashboard;
