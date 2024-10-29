
// src/App.js
import "./App.css";
import NoMatch from "./layouts/NoMatch";
import { Route, Routes } from "react-router-dom";
import AuthPageContainer from "./layouts/AuthPageContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./components/StudentDashboard";
import JoinCourse from "./pages/JoinCourse";
import JoinCourseConfirmation from "./pages/JoinCourseConfirmation";
import MyExam from './pages/MyExam';
import ExamPage from './pages/ExamPage'; // Ensure correct path here
import Curriculums from './components/Curriculums';
import CourseDetails from './components/CourseDetails';
import MCQExams from './components/MCQExams';
import Students from './components/Students';
import Exam from './components/Exam';
import StudentList from './components/StudentList';
import Courses from './components/Courses';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<AuthPageContainer><div>Auth Page</div></AuthPageContainer>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />

        {/* Student-Specific Routes */}
        <Route path="/join-course" element={<JoinCourse />} />
        <Route path="/join-course/:id" element={<JoinCourseConfirmation />} />
        <Route path="/my-exam" element={<MyExam />} />
        <Route path="/exam/:id" element={<ExamPage />} /> {/* Dynamic route for ExamPage with course ID */}

        {/* Dashboard and Nested Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<h2>Dashboard Home</h2>} />
          <Route path="curriculums" element={<Curriculums />} />
          <Route path="courses" element={<CourseDetails />} />
          <Route path="mcq-exams" element={<MCQExams />} />
          <Route path="students" element={<Students />} />
          <Route path="courses/:classRange" element={<Courses />} />
          <Route path="students/:course" element={<StudentList />} />
        </Route>

        {/* Standalone Exam Route */}
        <Route path="/exam" element={<Exam />} />
        
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
