import React, { useState } from 'react';
import './StressManagement.css';

function StressManagement() {
  const [activeModule, setActiveModule] = useState('BreathingExercises');

  const switchModule = (module) => {
    setActiveModule(module);
  };

  const renderBreathingExercises = () => (
    <div className="module-content">
      <h2>Breathing Exercises</h2>
      <p>Try deep breathing techniques to reduce stress.</p>
      <div className="exercise">
        <h3>4-7-8 Breathing</h3>
        <p>
          Inhale quietly through the nose for 4 seconds, hold the breath for 7 seconds, and then exhale completely through your mouth for 8 seconds. Repeat for 3-5 cycles.
        </p>
        <button className="start-button">Start Exercise</button>
      </div>
    </div>
  );

  const renderTimeManagement = () => (
    <div className="module-content">
      <h2>Time Management</h2>
      <p>Effective time management can reduce stress and increase productivity.</p>
      <ul>
        <li><strong>Pomodoro Technique:</strong> Work for 25 minutes, then take a 5-minute break.</li>
        <li><strong>Eisenhower Matrix:</strong> Prioritize tasks based on urgency and importance.</li>
      </ul>
      <button className="start-button">Learn More</button>
    </div>
  );

  const renderRelaxationTechniques = () => (
    <div className="module-content">
      <h2>Relaxation Techniques</h2>
      <p>Use these exercises to relax your body and mind.</p>
      <div className="exercise">
        <h3>Progressive Muscle Relaxation</h3>
        <p>
          Tense and release each muscle group from your toes to your head to release tension.
        </p>
        <button className="start-button">Start Exercise</button>
      </div>
    </div>
  );

  const renderMindfulJournaling = () => (
    <div className="module-content">
      <h2>Mindful Journaling</h2>
      <p>Write down your thoughts to process your emotions and relieve stress.</p>
      <textarea placeholder="Start journaling your thoughts here..." rows="6" />
      <button className="start-button">Save Journal</button>
    </div>
  );

  const renderStressReliefActivities = () => (
    <div className="module-content">
      <h2>Stress-Relief Activities</h2>
      <p>Take a break and enjoy activities that reduce stress.</p>
      <ul>
        <li>Take a walk in nature</li>
        <li>Read a book</li>
        <li>Engage in a hobby (painting, gardening, etc.)</li>
      </ul>
    </div>
  );

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'BreathingExercises':
        return renderBreathingExercises();
      case 'TimeManagement':
        return renderTimeManagement();
      case 'RelaxationTechniques':
        return renderRelaxationTechniques();
      case 'MindfulJournaling':
        return renderMindfulJournaling();
      case 'StressReliefActivities':
        return renderStressReliefActivities();
      default:
        return renderBreathingExercises();
    }
  };

  return (
    <div className="stress-management">
      <h2>Stress Management</h2>
      <p>Explore different ways to manage and reduce your stress.</p>

      {/* Tabs to switch between modules */}
      <div className="stress-management-tabs">
        <button
          onClick={() => switchModule('BreathingExercises')}
          className={activeModule === 'BreathingExercises' ? 'active-tab' : ''}
        >
          Breathing Exercises
        </button>
        <button
          onClick={() => switchModule('TimeManagement')}
          className={activeModule === 'TimeManagement' ? 'active-tab' : ''}
        >
          Time Management
        </button>
        <button
          onClick={() => switchModule('RelaxationTechniques')}
          className={activeModule === 'RelaxationTechniques' ? 'active-tab' : ''}
        >
          Relaxation Techniques
        </button>
        <button
          onClick={() => switchModule('MindfulJournaling')}
          className={activeModule === 'MindfulJournaling' ? 'active-tab' : ''}
        >
          Mindful Journaling
        </button>
        <button
          onClick={() => switchModule('StressReliefActivities')}
          className={activeModule === 'StressReliefActivities' ? 'active-tab' : ''}
        >
          Stress-Relief Activities
        </button>
      </div>

      {/* Module content */}
      {renderModuleContent()}
    </div>
  );
}

export default StressManagement;
