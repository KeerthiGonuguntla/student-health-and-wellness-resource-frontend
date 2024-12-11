import React, { useState } from 'react';
import DietPlan1 from './DietPlan1'; // Ensure this component is correctly created
import DietPlan2 from './DietPlan2'; // Ensure this component is correctly created
import './NutritionPage.css'; // CSS for scrolling behavior

function NutritionPage() {
  const [activePlan, setActivePlan] = useState('DietPlan1'); // Default to DietPlan1

  const scrollToPlan = (plan) => {
    const planElement = document.getElementById(plan);
    if (planElement) {
      planElement.scrollIntoView({ behavior: 'smooth' });
      setActivePlan(plan);
    }
  };

  return (
    <div>
      <h1>Nutrition Advice</h1>
      <p>Explore personalized diet plans for different health goals.</p>

      {/* Tabs for switching between Diet Plans */}
      <div className="nutrition-tabs">
        <button
          onClick={() => scrollToPlan('DietPlan1')}
          className={activePlan === 'DietPlan1' ? 'active-tab' : ''}
        >
          Weight Loss
        </button>
        <button
          onClick={() => scrollToPlan('DietPlan2')}
          className={activePlan === 'DietPlan2' ? 'active-tab' : ''}
        >
          Muscle Gain
        </button>
      </div>

      {/* Container for vertical scroll */}
      <div className="diet-plan-container">
        <div id="DietPlan1" className="diet-plan">
          <DietPlan1 />
        </div>
        <div id="DietPlan2" className="diet-plan">
          <DietPlan2 />
        </div>
      </div>
    </div>
  );
}

export default NutritionPage;
