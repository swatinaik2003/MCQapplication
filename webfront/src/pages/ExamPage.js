// src/pages/ExamPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ExamPage.css";

const coursesQuestions = {
  1: [
    { id: 1, question: "What is the primary color used to create green?", options: ["Blue", "Red", "Yellow", "Black"], answer: 0 },
    { id: 2, question: "Which medium is commonly used for watercolor painting?", options: ["Acrylic", "Oil", "Water", "Gouache"], answer: 2 },
    { id: 3, question: "Which brush size is best for fine details?", options: ["Large", "Medium", "Small", "Any size"], answer: 2 },
    { id: 4, question: "What is the term for painting with wet paint on a wet surface?", options: ["Dry brushing", "Layering", "Wet-on-wet", "Blending"], answer: 2 },
    { id: 5, question: "What surface is commonly used for watercolor painting?", options: ["Canvas", "Watercolor paper", "Wood", "Metal"], answer: 1 },
  ],
  2: [
    { id: 1, question: "What is the home row in typing?", options: ["QWERTY", "ASDFGH", "ZXCVBN", "RTYUIO"], answer: 1 },
    { id: 2, question: "What is the average typing speed for adults?", options: ["20 WPM", "40 WPM", "60 WPM", "80 WPM"], answer: 2 },
    { id: 3, question: "Which finger is used to type the letter 'A'?", options: ["Left pinky", "Left ring", "Left middle", "Left index"], answer: 0 },
    { id: 4, question: "Which key is usually pressed by the right pinky?", options: ["Enter", "Shift", "Backspace", "Space"], answer: 0 },
    { id: 5, question: "What is the correct posture while typing?", options: ["Leaning back", "Leaning forward", "Straight back", "Cross-legged"], answer: 2 },
  ],
  3: [
    { id: 1, question: "What does 'C' stand for in programming?", options: ["Complex", "Common", "Computer", "C language"], answer: 3 },
    { id: 2, question: "Who is known as the creator of the C language?", options: ["Dennis Ritchie", "Ken Thompson", "James Gosling", "Bjarne Stroustrup"], answer: 0 },
    { id: 3, question: "Which symbol is used to end a statement in C?", options: ["#", ";", ":", "$"], answer: 1 },
    { id: 4, question: "What is the function used to print text in C?", options: ["cout", "printf", "echo", "print"], answer: 1 },
    { id: 5, question: "Which header file is required for input-output functions?", options: ["stdio.h", "conio.h", "stdlib.h", "math.h"], answer: 0 },
  ],
  4: [
    { id: 1, question: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "IBM", "Apple"], answer: 1 },
    { id: 2, question: "What is JVM in Java?", options: ["Java Virtual Machine", "Java Variable Model", "Java Verified Module", "Java Volume Method"], answer: 0 },
    { id: 3, question: "Which keyword is used to define a class in Java?", options: ["define", "class", "object", "new"], answer: 1 },
    { id: 4, question: "Which operator is used to add two numbers in Java?", options: ["+", "-", "*", "/"], answer: 0 },
    { id: 5, question: "What is the correct syntax for the main method in Java?", options: ["void main()", "public static void main(String[] args)", "Main()", "int main()"], answer: 1 },
  ],
  5: [
    { id: 1, question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyperlinking Text Markup Language"], answer: 1 },
    { id: 2, question: "What is CSS used for?", options: ["Adding interactivity", "Structuring content", "Styling content", "Creating databases"], answer: 2 },
    { id: 3, question: "Which tag is used for the largest heading?", options: ["<heading>", "<h1>", "<h6>", "<head>"], answer: 1 },
    { id: 4, question: "What does the <a> tag define?", options: ["An anchor/link", "An article", "An address", "A header"], answer: 0 },
    { id: 5, question: "Which attribute specifies a link's destination in HTML?", options: ["href", "src", "link", "dest"], answer: 0 },
  ],
  6: [
    { id: 1, question: "What symbol is used to start a comment in Python?", options: ["//", "#", "/*", "<!--"], answer: 1 },
    { id: 2, question: "Which of these is a valid Python data type?", options: ["Character", "Number", "Tuple", "Boolean"], answer: 2 },
    { id: 3, question: "How do you define a function in Python?", options: ["function myFunction", "def myFunction()", "func myFunction()", "define myFunction()"], answer: 1 },
    { id: 4, question: "What is the output of 2 ** 3 in Python?", options: ["6", "8", "9", "None"], answer: 1 },
    { id: 5, question: "Which keyword is used for loops in Python?", options: ["repeat", "loop", "for", "while"], answer: 2 },
  ],
};

const ExamPage = () => {
  const { id } = useParams(); // Get course ID
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(null); // To store score after submission
  const [isOptionSelected, setIsOptionSelected] = useState(false); // Track if an option has been selected
  const questionsData = coursesQuestions[id] || []; // Retrieve questions for the course

  const handleOptionChange = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = index;
    setSelectedOptions(updatedOptions);
    setIsOptionSelected(true); // Mark that an option has been selected
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsOptionSelected(false); // Reset the option selection state for the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsOptionSelected(false); // Reset the option selection state for the previous question
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((selected, index) => {
      if (selected === questionsData[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="exam-page">
      <h2>Exam for {coursesQuestions[id]?.[0]?.courseName || "Selected Course"}</h2>
      {questionsData.length > 0 ? (
        <>
          {score === null ? (
            <>
              <h3>{questionsData[currentQuestionIndex].question}</h3>
              {questionsData[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    onChange={() => handleOptionChange(index)}
                    checked={selectedOptions[currentQuestionIndex] === index}
                  />
                  {option}
                </div>
              ))}
              <div className="exam-buttons">
                <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
                <button 
                  onClick={handleNext} 
                  disabled={!isOptionSelected} // Enable the button only if an option is selected
                >
                  Next
                </button>
                {currentQuestionIndex === questionsData.length - 1 ? (
                  <button onClick={handleSubmit}>Submit</button>
                ) : null}
              </div>
            </>
          ) : (
            <div>
              <h3>Your score is: {score} / {questionsData.length}</h3>
            </div>
          )}
        </>
      ) : (
        <p>No questions available for this course.</p>
      )}
    </div>
  );
};

export default ExamPage;
