import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MentalHealthPage from './components/MentalHealthPage';
import FitnessProgramsPage from './components/FitnessProgramsPage';
import NutritionPage from './components/NutritionPage';


import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AboutUs from './components/AboutUs';
import AdminPage from './components/AdminPage';
import StudentContent from './components/StudentContent';
import ViewAllStudents from './components/ViewAllStudents';
import DietPlan1 from './components/DietPlan1';
import DietPlan2 from './components/DietPlan2';
import FitnessChallenges from './components/FitnessChallenges';
import ProgressTracking from './components/ProgressTracking';
import ExerciseTutorials from './components/ExerciseTutorials';
import WorkoutPlans from './components/WorkoutPlans';
import StressManagement from './components/StressManagement';
import Mindfulness from './components/Mindfulness';
import CounselingServices from './components/CounselingServicesPage';
import AcademicSupport from './components/AcademicSupport';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mental-health" element={<MentalHealthPage />} />
          <Route path="/fitness-programs" element={<FitnessProgramsPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/student" element={<StudentContent />} />
          <Route path="/viewallstudents"element={<ViewAllStudents/>}/>
          <Route path="/dietplan1"element={<DietPlan1/>}/>
          <Route path="/dietplan2"element={<DietPlan2/>}/>
          <Route path="/fitnesschallenges"element={<FitnessChallenges/>}/>
          <Route path="/progresstracking"element={<ProgressTracking/>}/>
          <Route path="/exercisetutorial"element={<ExerciseTutorials/>}/>
          <Route path="/workoutplans"element={<WorkoutPlans/>}/>
          <Route path="/mindfulness"element={<Mindfulness/>}/>
          <Route path="/counselingservices"element={<CounselingServices/>}/>
          <Route path="/stressmanagement"element={<StressManagement/>}/>
          <Route path="/academicsupport"element={<AcademicSupport/>}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;