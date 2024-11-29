
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Curriculums.css';

const Curriculums = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [courses, setCourses] = useState({
    "1-4": [
      { id: 1, name: 'Typing', description: 'Learn typing skills.' },
      { id: 2, name: 'Painting', description: 'Introduction to painting techniques.' },
    ],
    "5-7": [
      { id: 3, name: 'Introduction to C', description: 'Basic programming concepts using C.' },
      { id: 4, name: 'Introduction to Web Development', description: 'Learn HTML, CSS, and JavaScript.' },
    ],
    "8-10": [
      { id: 5, name: 'Introduction to Java', description: 'Fundamentals of Java programming.' },
      { id: 6, name: 'Introduction to Python', description: 'Learn Python programming for beginners.' },
    ],
  });

  const [newCourse, setNewCourse] = useState({ name: '', description: '' });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Handle class range selection
  const handleRangeClick = (range) => {
    setSelectedRange(range);
    setShowForm(false); // Hide form when changing class range
  };

  // Handle course click and navigate to StudentList component
  const handleCourseClick = (courseName) => {
    navigate(`/dashboard/students/${courseName}`);
  };

  // Handle form input changes for courses
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle course submission
  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (!newCourse.name || !newCourse.description || !selectedRange) return;

    const courseToAdd = {
      id: courses[selectedRange].length + 1,
      name: newCourse.name,
      description: newCourse.description,
    };

    setCourses((prevCourses) => ({
      ...prevCourses,
      [selectedRange]: [...prevCourses[selectedRange], courseToAdd],
    }));

    setNewCourse({ name: '', description: '' });
    setShowForm(false);
  };

  // Prepare data for the class range table
  const classRanges = [
    { range: "1-4", description: "Basic education for young learners." },
    { range: "5-7", description: "Intermediate education for growing minds." },
    { range: "8-10", description: "Advanced education preparing for high school." },
  ];

  return (
    <div className="curriculums">
      <h2>Select a Class Range</h2>

      {/* Table format for class ranges */}
      <table className="class-range-table">
        <thead>
          <tr>
            <th>Curriculum</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {classRanges.map(({ range, description }) => (
            <tr key={range} onClick={() => handleRangeClick(range)}>
              <td>{range}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render courses for the selected range */}
      {selectedRange && (
        <div className="course-box">
          <h3>Courses for Classes {selectedRange}</h3>
          <table className="courses-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {courses[selectedRange].map((course) => (
                <tr key={course.id} onClick={() => handleCourseClick(course.name)}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add new course button */}
          <button onClick={() => setShowForm(true)} className="add-course-button">
            Add New Course
          </button>

          {/* Show form to add a new course */}
          {showForm && (
            <form onSubmit={handleCourseSubmit} className="course-form">
              <h4>Add a New Course</h4>
              <label>
                Course Name:
                <input
                  type="text"
                  name="name"
                  value={newCourse.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={newCourse.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Curriculums;
