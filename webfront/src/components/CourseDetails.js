
// src/components/CourseDetails.js
import React from 'react';
import './CourseDetails.css';

const studentData = {
  Typing: [
    { name: 'Alice', class: 'Class 1' },
    { name: 'Bob', class: 'Class 2' },
    { name: 'Charlie', class: 'Class 3' },
    { name: 'Ryan', class: 'Class 4' }
  ],
  Painting: [
    { name: 'David', class: 'Class 1' },
    { name: 'Eva', class: 'Class 2' },
    { name: 'Frank', class: 'Class 3' },
    { name: 'Mia', class: 'Class 4' }
  ],
  'Introduction to C': [
    { name: 'George', class: 'Class 5' },
    { name: 'Hannah', class: 'Class 6' },
    { name: 'Ian', class: 'Class 7' },
  ],
  'Web Development': [
    { name: 'Jack', class: 'Class 5' },
    { name: 'Karen', class: 'Class 6' },
    { name: 'Liam', class: 'Class 7' }
  ],
  'Introduction to Python': [
    { name: 'Mia', class: 'Class 8' },
    { name: 'Noah', class: 'Class 9' },
    { name: 'Olivia', class: 'Class 10' }
  ],
  'Introduction to Java': [
    { name: 'Paul', class: 'Class 8' },
    { name: 'Quinn', class: 'Class 9' },
    { name: 'Ryan', class: 'Class 10' }
  ]
};

const CourseDetails = () => {
  const courses = Object.keys(studentData);

  return (
    <div className="course-details">
      <h2>Available Courses</h2>
      {courses.map((course, index) => (
        <div key={index} className="course-item">
          <h3>{course}</h3>
          <ul>
            {studentData[course].map((student, idx) => (
              <li key={idx}>
                {student.name} - {student.class}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
