
// src/components/ExamPage.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './ExamPage.css';

const ExamPage = () => {
  const { course } = useParams();

  const courseMapping = {
    "Introduction to C": "c",
    "Web Development": "web",
    "Introduction to Java": "java",
    "Introduction to Python": "python",
    "Typing": "typing",
    "Painting": "painting",
  };

  const normalizedCourse = courseMapping[course];

  const questions = useMemo(() => ({
    typing: [
      { id: 1, question: "What is the standard typing speed measured in?", options: ["Words per minute", "Characters per minute", "Pages per minute", "Lines per minute"], answer: "Words per minute" },
      { id: 2, question: "Which key is used to create a space between words?", options: ["Enter", "Backspace", "Spacebar", "Shift"], answer: "Spacebar" },
      { id: 3, question: "Which finger is used to type the letter 'A' on a QWERTY keyboard?", options: ["Left little finger", "Right index finger", "Left index finger", "Right little finger"], answer: "Left little finger" },
      { id: 4, question: "What is the correct posture for typing?", options: ["Hunched back", "Straight back", "Leaning forward", "Leaning backward"], answer: "Straight back" },
      { id: 5, question: "Which tool can be used to measure typing speed?", options: ["Stopwatch", "Typing software", "Ruler", "Calculator"], answer: "Typing software" },
    ],
    painting: [
      { id: 1, question: "What is the primary color in painting?", options: ["Red", "Black", "Green", "White"], answer: "Red" },
      { id: 2, question: "Which of these is a medium used in painting?", options: ["Oil", "Watercolor", "Acrylic", "All of the above"], answer: "All of the above" },
      { id: 3, question: "Which famous artist painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
      { id: 4, question: "Which of these colors is considered a 'warm' color?", options: ["Blue", "Red", "Green", "Purple"], answer: "Red" },
      { id: 5, question: "What is the term for a painting created on a wet plaster surface?", options: ["Fresco", "Mosaic", "Collage", "Etching"], answer: "Fresco" },
    ],
    c: [
      { id: 1, question: "What does C stand for in programming?", options: ["Compiler", "Compile", "Computer", "C Language"], answer: "C Language" },
      { id: 2, question: "Which operator is used to assign a value to a variable in C?", options: ["=", "==", "->", ":"], answer: "=" },
      { id: 3, question: "What is the correct way to declare a variable in C?", options: ["int x;", "x int;", "var x;", "declare x as int;"], answer: "int x;" },
      { id: 4, question: "Which of the following is a control structure in C?", options: ["if", "for", "while", "All of the above"], answer: "All of the above" },
      { id: 5, question: "What is the output of printf('Hello, World!');?", options: ["Hello, World!", "Hello World", "Hello, World!", "Syntax Error"], answer: "Hello, World!" },
    ],
    web: [
      { id: 1, question: "What does HTML stand for?", options: ["Hypertext Markup Language", "Hypertext Markup Logic", "Hypertext Markup Link", "Hypertext Multilayer Language"], answer: "Hypertext Markup Language" },
      { id: 2, question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: "<style>" },
      { id: 3, question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "body:color=black;", "{body;color:black;}", "body: color black;"], answer: "body {color: black;}" },
      { id: 4, question: "Which HTML attribute is used to define inline styles?", options: ["class", "style", "font", "styles"], answer: "style" },
      { id: 5, question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    ],
    java: [
      { id: 1, question: "What is the correct way to declare a variable in Java?", options: ["int x;", "x int;", "var x;", "declare x as int;"], answer: "int x;" },
      { id: 2, question: "Which of these is not a Java primitive type?", options: ["int", "boolean", "String", "char"], answer: "String" },
      { id: 3, question: "What is the main method used for in Java?", options: ["To start the program", "To define a class", "To create an object", "To declare variables"], answer: "To start the program" },
      { id: 4, question: "Which keyword is used to create an object in Java?", options: ["new", "create", "object", "this"], answer: "new" },
      { id: 5, question: "What does JVM stand for?", options: ["Java Variable Machine", "Java Virtual Machine", "Java Version Machine", "Java Visual Machine"], answer: "Java Virtual Machine" },
    ],
    python: [
      { id: 1, question: "What is the correct extension for a Python file?", options: [".py", ".python", ".pyt", ".pt"], answer: ".py" },
      { id: 2, question: "Which of the following is a Python data type?", options: ["list", "set", "dictionary", "All of the above"], answer: "All of the above" },
      { id: 3, question: "How do you create a function in Python?", options: ["def myFunction()", "function myFunction()", "create myFunction()", "None of the above"], answer: "def myFunction()" },
      { id: 4, question: "Which keyword is used to handle exceptions in Python?", options: ["catch", "except", "handle", "throw"], answer: "except" },
      { id: 5, question: "What is the output of print(2 ** 3)?", options: ["6", "8", "9", "2"], answer: "8" },
    ],
  }), []);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [marks, setMarks] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const handleSubmit = useCallback(() => {
    let totalMarks = 0;

    if (questions[normalizedCourse]) {
      questions[normalizedCourse].forEach((question) => {
        if (answers[question.id] === question.answer) {
          totalMarks++;
        }
      });
    }

    setMarks(totalMarks);
    setSubmitted(true);
  }, [answers, normalizedCourse, questions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleSubmit]);

  const handleAnswerChange = (questionId, selectedOption) => {
    if (!submitted) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: selectedOption,
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions[normalizedCourse].length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentQuestion = questions[normalizedCourse]?.[currentQuestionIndex];

  return (
    <div className="exam-page">
      <h1>{course} Exam</h1>
      <h2>Time Left: {timeLeft} seconds</h2>
      {!submitted ? (
        <div>
          {currentQuestion && (
            <div key={currentQuestion.id}>
              <h3>{currentQuestion.id}. {currentQuestion.question}</h3>
              <form>
                {currentQuestion.options.map((option, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option}
                        onChange={() => handleAnswerChange(currentQuestion.id, option)}
                        disabled={submitted}
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          )}
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
          <button onClick={handleNext} disabled={currentQuestionIndex === questions[normalizedCourse].length - 1}>Next</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {marks} / {questions[normalizedCourse].length}</h2>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
