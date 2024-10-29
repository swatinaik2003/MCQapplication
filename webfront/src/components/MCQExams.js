


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './MCQExams.css'; // Ensure the CSS file exists

const MCQExams = () => {
  const [students] = useState([
    { id: 1, name: 'John Doe', course: 'Typing', examsTaken: 1 },
    { id: 2, name: 'Jane Smith', course: 'Typing', examsTaken: 2 },
    { id: 3, name: 'Mike Johnson', course: 'Typing', examsTaken: 0 },
    { id: 4, name: 'Emily Davis', course: 'Typing', examsTaken: 0 },
    { id: 5, name: 'Alice Brown', course: 'Typing', examsTaken: 0 },
    { id: 6, name: 'Charlie Wilson', course: 'Painting', examsTaken: 0 },
    { id: 7, name: 'Sophia Miller', course: 'Painting', examsTaken: 1 },
    { id: 8, name: 'Liam Anderson', course: 'Painting', examsTaken: 2 },
    { id: 9, name: 'Emma Taylor', course: 'Painting', examsTaken: 0 },
    { id: 10, name: 'Noah Thompson', course: 'Painting', examsTaken: 0 },
    { id: 11, name: 'Lucas Martinez', course: 'Introduction to C', examsTaken: 0 },
    { id: 12, name: 'Olivia Garcia', course: 'Introduction to C', examsTaken: 0 },
    { id: 13, name: 'Ava Martinez', course: 'Introduction to C', examsTaken: 1 },
    { id: 14, name: 'Mason Rodriguez', course: 'Introduction to C', examsTaken: 2 },
    { id: 15, name: 'Isabella Lee', course: 'Introduction to C', examsTaken: 0 },
    { id: 16, name: 'James Walker', course: 'Web Development', examsTaken: 0 },
    { id: 17, name: 'Mia Hall', course: 'Web Development', examsTaken: 1 },
    { id: 18, name: 'Ethan Allen', course: 'Web Development', examsTaken: 0 },
    { id: 19, name: 'Harper Young', course: 'Web Development', examsTaken: 2 },
    { id: 20, name: 'Benjamin King', course: 'Web Development', examsTaken: 0 },
    { id: 21, name: 'William Wright', course: 'Introduction to Java', examsTaken: 0 },
    { id: 22, name: 'Charlotte Scott', course: 'Introduction to Java', examsTaken: 1 },
    { id: 23, name: 'Daniel Green', course: 'Introduction to Java', examsTaken: 0 },
    { id: 24, name: 'Amelia Adams', course: 'Introduction to Java', examsTaken: 0 },
    { id: 25, name: 'Jack Hill', course: 'Introduction to Java', examsTaken: 2 },
    { id: 26, name: 'Zoe Baker', course: 'Python', examsTaken: 0 },
    { id: 27, name: 'Henry Gonzalez', course: 'Python', examsTaken: 1 },
    { id: 28, name: 'Lily Nelson', course: 'Python', examsTaken: 2 },
    { id: 29, name: 'Owen Carter', course: 'Python', examsTaken: 0 },
    { id: 30, name: 'Ella Perez', course: 'Python', examsTaken: 0 },
  ]);

  const questionsData = {
    Typing: [
      {
        id: 1,
        question: 'What is the home row on a keyboard?',
        options: [
          { id: 'a', text: 'ASDF JKL;' },
          { id: 'b', text: 'QWERTY' },
          { id: 'c', text: 'ZXCVBNM' },
          { id: 'd', text: '123456' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 2,
        question: 'How many fingers should be used for touch typing?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '5' },
          { id: 'c', text: '10' },
          { id: 'd', text: '8' },
        ],
        correctAnswer: 'c',
      },
      {
        id: 3,
        question: 'What is the fastest typing speed recorded?',
        options: [
          { id: 'a', text: '50 WPM' },
          { id: 'b', text: '80 WPM' },
          { id: 'c', text: '120 WPM' },
          { id: 'd', text: '200 WPM' },
        ],
        correctAnswer: 'c',
      },
      {
        id: 4,
        question: 'Which key is used to create a new line?',
        options: [
          { id: 'a', text: 'Spacebar' },
          { id: 'b', text: 'Enter' },
          { id: 'c', text: 'Tab' },
          { id: 'd', text: 'Shift' },
        ],
        correctAnswer: 'b',
      },
      {
        id: 5,
        question: 'What is the correct typing posture?',
        options: [
          { id: 'a', text: 'Slouching' },
          { id: 'b', text: 'Sitting upright' },
          { id: 'c', text: 'Leaning forward' },
          { id: 'd', text: 'Lying down' },
        ],
        correctAnswer: 'b',
      },
    ],
    Painting: [
      {
        id: 1,
        question: 'What is the primary color?',
        options: [
          { id: 'a', text: 'Red' },
          { id: 'b', text: 'Green' },
          { id: 'c', text: 'Yellow' },
          { id: 'd', text: 'Blue' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 2,
        question: 'Which color is created by mixing red and blue?',
        options: [
          { id: 'a', text: 'Green' },
          { id: 'b', text: 'Purple' },
          { id: 'c', text: 'Orange' },
          { id: 'd', text: 'Brown' },
        ],
        correctAnswer: 'b',
      },
      {
        id: 3,
        question: 'What type of paint is best for beginners?',
        options: [
          { id: 'a', text: 'Oil paint' },
          { id: 'b', text: 'Watercolor' },
          { id: 'c', text: 'Acrylic' },
          { id: 'd', text: 'Gouache' },
        ],
        correctAnswer: 'c',
      },
      {
        id: 4,
        question: 'What is a canvas used for?',
        options: [
          { id: 'a', text: 'Sculpting' },
          { id: 'b', text: 'Drawing' },
          { id: 'c', text: 'Painting' },
          { id: 'd', text: 'Collage' },
        ],
        correctAnswer: 'c',
      },
      {
        id: 5,
        question: 'Which tool is used to apply paint?',
        options: [
          { id: 'a', text: 'Brush' },
          { id: 'b', text: 'Pencil' },
          { id: 'c', text: 'Eraser' },
          { id: 'd', text: 'Ruler' },
        ],
        correctAnswer: 'a',
      },

    ],
    'Introduction to C': [
      {
        id: 1,
        question: 'What does C stand for in programming?',
        options: [
          { id: 'a', text: 'Compile' },
          { id: 'b', text: 'Computer' },
          { id: 'c', text: 'Code' },
          { id: 'd', text: 'C language' },
        ],
        correctAnswer: 'd',
      },
      {
        id: 2,
        question: 'What is the output of printf("Hello, World!");?',
        options: [
          { id: 'a', text: 'Hello, World!' },
          { id: 'b', text: 'Hello, World' },
          { id: 'c', text: 'Hello World!' },
          { id: 'd', text: 'No output' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 3,
        question: 'Which of the following is a correct way to declare a variable in C?',
        options: [
          { id: 'a', text: 'int 1number;' },
          { id: 'b', text: 'int number1;' },
          { id: 'c', text: '1int number;' },
          { id: 'd', text: 'number int;' },
        ],
        correctAnswer: 'b',
      },
      {
        id: 4,
        question: 'What is the correct way to write a comment in C?',
        options: [
          { id: 'a', text: '// comment' },
          { id: 'b', text: '/* comment */' },
          { id: 'c', text: '<-- comment -->' },
          { id: 'd', text: '## comment' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 5,
        question: 'Which header file is needed for input/output operations in C?',
        options: [
          { id: 'a', text: '<stdlib.h>' },
          { id: 'b', text: '<stdio.h>' },
          { id: 'c', text: '<conio.h>' },
          { id: 'd', text: '<string.h>' },
        ],
        correctAnswer: 'b',
      },
    ],
    'Web Development': [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          { id: 'a', text: 'Hyper Text Markup Language' },
          { id: 'b', text: 'High Text Markup Language' },
          { id: 'c', text: 'Hyperlinks and Text Markup Language' },
          { id: 'd', text: 'Hyper Text Machine Language' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 2,
        question: 'Which of the following is a CSS property?',
        options: [
          { id: 'a', text: 'color' },
          { id: 'b', text: 'font-size' },
          { id: 'c', text: 'background-color' },
          { id: 'd', text: 'All of the above' },
        ],
        correctAnswer: 'd',
      },
      {
        id: 3,
        question: 'What does CSS stand for?',
        options: [
          { id: 'a', text: 'Cascading Style Sheets' },
          { id: 'b', text: 'Computer Style Sheets' },
          { id: 'c', text: 'Colorful Style Sheets' },
          { id: 'd', text: 'Creative Style Sheets' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 4,
        question: 'What is the purpose of JavaScript?',
        options: [
          { id: 'a', text: 'To structure content' },
          { id: 'b', text: 'To style content' },
          { id: 'c', text: 'To make content interactive' },
          { id: 'd', text: 'To store data' },
        ],
        correctAnswer: 'c',
      },
      {
        id: 5,
        question: 'Which tag is used to define an unordered list in HTML?',
        options: [
          { id: 'a', text: '<ul>' },
          { id: 'b', text: '<ol>' },
          { id: 'c', text: '<li>' },
          { id: 'd', text: '<list>' },
        ],
        correctAnswer: 'a',
      },
      
    ],
    'Introduction to Java': [
      {
        id: 1,
        question: 'What is the main function in Java?',
        options: [
          { id: 'a', text: 'main()' },
          { id: 'b', text: 'start()' },
          { id: 'c', text: 'init()' },
          { id: 'd', text: 'run()' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 2,
        question: 'Which of the following is a Java keyword?',
        options: [
          { id: 'a', text: 'void' },
          { id: 'b', text: 'function' },
          { id: 'c', text: 'method' },
          { id: 'd', text: 'variable' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 3,
        question: 'What is the output of System.out.println("Hello, World!");?',
        options: [
          { id: 'a', text: 'Hello, World!' },
          { id: 'b', text: 'Hello World!' },
          { id: 'c', text: 'No output' },
          { id: 'd', text: 'Error' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 4,
        question: 'Which method is the entry point of a Java application?',
        options: [
          { id: 'a', text: 'main()' },
          { id: 'b', text: 'start()' },
          { id: 'c', text: 'run()' },
          { id: 'd', text: 'init()' },
        ],
        correctAnswer: 'a',
      },
      {
        id: 5,
        question: 'What does JVM stand for?',
        options: [
          { id: 'a', text: 'Java Virtual Machine' },
          { id: 'b', text: 'Java Variable Machine' },
          { id: 'c', text: 'Java Visual Machine' },
          { id: 'd', text: 'Java Vector Machine' },
        ],
        correctAnswer: 'a',
      },
    ],
    Python: [
      {
        id: 1,
        question: 'What is the correct file extension for Python files?',
        options: [
          { id: 'a', text: '.pt' },
          { id: 'b', text: '.py' },
          { id: 'c', text: '.p' },
          { id: 'd', text: '.python' },
        ],
        correctAnswer: 'b',
      },
      
    ],
  };

  const navigate = useNavigate();

  const handleExamClick = (course, examNumber) => {
    // Pass the selected course, questions data, and exam number to the Exam component
    navigate('/exam', {
      state: { selectedCourse: course, questionsData: questionsData, examNumber: examNumber },
    });
  };

  // Group students by course
  const groupedStudents = students.reduce((acc, student) =>
     {
    if (!acc[student.course]) {
      acc[student.course] = [];
    }
    acc[student.course].push(student);
    return acc;
  }, {});

  return (
    <div className="mcq-exams">
      <h2>MCQ Exams</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Student Names</th>
            <th>Exam 1</th>
            <th>Exam 2</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedStudents).map(course => (
            <tr key={course}>
              <td>{course}</td>
              <td>
                {groupedStudents[course].map(student => (
                  <div key={student.id} style={{ padding: '10px 0' }}>
                    {student.name}
                  </div>
                ))}
              </td>
              <td>
                <button
                  className="take-exam-button"
                  onClick={() => handleExamClick(course, 1)}
                >
                  Take Exam 1
                </button>
              </td>
              <td>
                <button
                  className="take-exam-button"
                  onClick={() => handleExamClick(course, 2)}
                >
                  Take Exam 2
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MCQExams; 