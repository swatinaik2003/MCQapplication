// src/pages/JoinCourseConfirmation.js
import React from "react";
import { useParams } from "react-router-dom";

const JoinCourseConfirmation = () => {
  const { id } = useParams();
  
  // Simulate fetching course name based on ID
  const courses = {
    1: "Painting",
    2: "Typing",
    3: "Introduction to C",
    4: "Introduction to Java",
    5: "Introduction to Web Development",
    6: "Introduction to Python",
  };
  
  return (
    <div>
      <h2>Course Joined</h2>
      <p>You have successfully joined the {courses[id]} course!</p>
    </div>
  );
};

export default JoinCourseConfirmation;
