
// src/pages/MyExam.js
import React from "react";
import { Link } from "react-router-dom";
import './MyExam.css'; // Import CSS for styling

const courses = [
  { id: 1, name: "Painting" },
  { id: 2, name: "Typing" },
  { id: 3, name: "Introduction to C" },
  { id: 4, name: "Introduction to Java" },
  { id: 5, name: "Introduction to Web Development" },
  { id: 6, name: "Introduction to Python" },
];

const MyExam = () => {
  return (
    <div className="my-exam">
      <h2>Available Exams</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th> {/* Column for Course ID */}
            <th>Course Name</th> {/* Column for Course Name */}
            <th>Action</th> {/* Column for Action */}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td> {/* Display Course ID */}
              <td>{course.name}</td> {/* Display Course Name */}
              <td>
                <Link to={`/exam/${course.id}`} className="take-exam-button">
                  Take Exam
                </Link>
                {/* New button for second exam */}
                <Link to={`/exam/${course.id}?exam=2`} className="take-exam2-button">
                  Take Exam 2
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyExam; // Default export this
