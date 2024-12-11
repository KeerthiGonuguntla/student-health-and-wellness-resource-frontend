import React, { useState } from 'react';
import WorkoutPlans from './WorkoutPlans';
import ExerciseTutorials from './ExerciseTutorials';
import FitnessChallenges from './FitnessChallenges';
import ProgressTracking from './ProgressTracking';
import './FitnessPrograms.css'; // Add styling for professional appearance

function FitnessProgramsPage() {
  const [activeTab, setActiveTab] = useState('WorkoutPlans');

  const renderContent = () => {
    switch (activeTab) {
      case 'WorkoutPlans':
        return <WorkoutPlans />;
      case 'ExerciseTutorials':
        return <ExerciseTutorials />;
      case 'ProgressTracking':
        return <ProgressTracking />;
      case 'FitnessChallenges':
        return <FitnessChallenges />;
      default:
        return <WorkoutPlans />;
    }
  };

  return (
    <div className="fitness-page">
      <h1 className="fitness-title">Fitness Programs</h1>
      <p className="fitness-description">
        Achieve your fitness goals with our comprehensive programs. Whether you're looking for structured workout plans, tutorials, challenges, or progress tracking, we have everything to help you stay on track.
      </p>

      {/* Tabs for navigation */}
      <div className="fitness-tabs">
        <button 
          onClick={() => setActiveTab('WorkoutPlans')} 
          className={activeTab === 'WorkoutPlans' ? 'active' : ''}>
          Workout Plans
        </button>
        <button 
          onClick={() => setActiveTab('ExerciseTutorials')} 
          className={activeTab === 'ExerciseTutorials' ? 'active' : ''}>
          Exercise Tutorials
        </button>
        <button 
          onClick={() => setActiveTab('FitnessChallenges')} 
          className={activeTab === 'FitnessChallenges' ? 'active' : ''}>
          Fitness Challenges
        </button>
        <button 
          onClick={() => setActiveTab('ProgressTracking')} 
          className={activeTab === 'ProgressTracking' ? 'active' : ''}>
          Progress Tracking
        </button>
      </div>

      {/* Content display based on active tab */}
      <div className="fitness-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default FitnessProgramsPage;
