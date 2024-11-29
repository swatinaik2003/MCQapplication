
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Courses.css';

const courseData = {
  '1-4': [
    { id: 1, name: 'Typing', description: 'Typing skills for beginners' },
    { id: 2, name: 'Painting', description: 'Basic painting techniques' }
  ],
  '5-7': [
    { id: 3, name: 'Introduction to C', description: 'Introduction to C programming' },
    { id: 4, name: 'Web Development', description: 'Basics of web development' }
  ],
  '8-10': [
    { id: 5, name: 'Introduction to Python', description: 'Introduction to Python programming' },
    { id: 6, name: 'Introduction to Java', description: 'Introduction to Java programming' }
  ]
};

const Courses = () => {
  const { classRange } = useParams();
  const courses = courseData[classRange] || [];

  return (
    <div className="courses">
      <h2>Courses for Classes {classRange.replace('-', ' to ')}</h2>
      {courses.length > 0 ? (
        <table className="course-table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <Link to={`/dashboard/students/${course.name}`} className="view-course-link">
                    View Course
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No courses available for this class range</div>
      )}
    </div>
  );
};

export default Courses;
