import React, { useState } from 'react';
import StressManagement from './StressManagement'; // Ensure this component is correctly created
import Mindfulness from './Mindfulness'; // Ensure this component is correctly created
import CounselingServices from './CounselingServicesPage'; // Ensure this component is correctly created
import './MentalHealthPage.css'; // CSS for scrolling behavior

function MentalHealthPage() {
  const [activeSection, setActiveSection] = useState('StressManagement');

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <div>
      <h1>Mental Health Resources</h1>
      <p>Explore resources to support mental well-being, reduce stress, and relax your mind.</p>

      {/* Tabs for switching between mental health topics */}
      <div className="mental-health-tabs">
        <button
          onClick={() => scrollToSection('StressManagement')}
          className={activeSection === 'StressManagement' ? 'active-tab' : ''}
        >
          Stress Management
        </button>
        <button
          onClick={() => scrollToSection('Mindfulness')}
          className={activeSection === 'Mindfulness' ? 'active-tab' : ''}
        >
          Mindfulness
        </button>
        <button
          onClick={() => scrollToSection('CounselingServices')}
          className={activeSection === 'CounselingServices' ? 'active-tab' : ''}
        >
          Counseling Services
        </button>
      </div>

      {/* Container for vertical scroll */}
      <div className="mental-health-container">
        <div id="StressManagement" className="mental-health-section">
          <StressManagement />
        </div>
        <div id="Mindfulness" className="mental-health-section">
          <Mindfulness />
        </div>
        <div id="CounselingServices" className="mental-health-section">
          <CounselingServices />
        </div>
      </div>
    </div>
  );
}

export default MentalHealthPage;
