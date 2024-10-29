
// src/pages/JoinCourse.js
import React from "react";
import { Link } from "react-router-dom";
import "./JoinCourse.css"; // Import CSS for styling

const courses = [
  { id: 1, name: "Painting" },
  { id: 2, name: "Typing" },
  { id: 3, name: "Introduction to C" },
  { id: 4, name: "Introduction to Java" },
  { id: 5, name: "Introduction to Web Development" },
  { id: 6, name: "Introduction to Python" },
];

const JoinCourse = () => {
  return (
    <div className="join-course">
      <h2>Join a Course</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>  {/* Column for Course ID */}
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

export default JoinCourse; // Default export this
