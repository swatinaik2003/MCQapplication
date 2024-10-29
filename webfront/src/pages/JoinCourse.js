
// src/pages/JoinCourse.js
import React from "react";
import { Link } from "react-router-dom";
import "./JoinCourse.css"; // Import CSS for styling

const courses = [
  { id: 1, name: "Painting", classRange: "1 to 4" },
  { id: 2, name: "Typing", classRange: "1 to 4" },
  { id: 3, name: "Introduction to C", classRange: "5 to 7" },
  { id: 4, name: "Introduction to Java", classRange: "5 to 7" },
  { id: 5, name: "Introduction to Web Development", classRange: "8 to 10" },
  { id: 6, name: "Introduction to Python", classRange: "8 to 10" },
];

const JoinCourse = () => {
  return (
    <div className="join-course">
      <h2>Join a Course</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th> {/* Column for Course ID */}
            <th>Course Name</th> {/* Column for Course Name */}
            <th>Class Range</th> {/* Column for Class Range */}
            <th>Action</th> {/* Column for Action */}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td> {/* Display Course ID */}
              <td>{course.name}</td> {/* Display Course Name */}
              <td>{course.classRange}</td> {/* Display Class Range */}
              <td>
                <Link to={`/join-course/${course.id}`} className="join-button">
                  Join Course
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JoinCourse;
