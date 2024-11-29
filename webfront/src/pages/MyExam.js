
// src/pages/MyExam.js
import React from "react";
import { Link } from "react-router-dom";
import './MyExam.css'; // Import CSS for styling

const courses = [
  { id: 1, name: "Painting", curriculum: "1 to 4" },
  { id: 2, name: "Typing", curriculum: "1 to 4" },
  { id: 3, name: "Introduction to C", curriculum: "5 to 7" },
  { id: 4, name: "Introduction to Java", curriculum: "8 to 10" },
  { id: 5, name: "Introduction to Web Development", curriculum: "5 to 7" },
  { id: 6, name: "Introduction to Python", curriculum: "8 to 10" },
];

const MyExam = () => {
  return (
    <div className="my-exam">
      <h2>Available Exams</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Curriculum</th> {/* New Column for Curriculum */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.curriculum}</td> {/* Display Curriculum */}
              <td>
                <Link to={`/exam/${course.id}`} className="take-exam-button">
                  Take Exam 1
                </Link>
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

export default MyExam;
