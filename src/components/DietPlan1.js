import React from 'react';
import breakfast from '../assests/images/breakfast.jpg';
import lunch from '../assests/images/lunch.jpg';
import dinner from '../assests/images/dinner.jpg';


function DietPlan1() {
  return (
    <div>
      <h1>Weight Loss Diet Plan</h1>
      <p>This 7-day meal plan is designed to help you lose weight in a healthy and sustainable way.</p>

      <div className="meal-section">
        <h2>Day 1</h2>
        <h3>Breakfast</h3>
        <img src={breakfast} alt="breakfast.jpg" style={{ width: '50%', height: '50' }} />
        <p>Start your day with a healthy, filling breakfast.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>1 cup oatmeal</li>
          <li>1 banana</li>
          <li>1 tbsp almond butter</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Cook the oatmeal according to package instructions.</li>
          <li>Top with sliced banana and almond butter.</li>
          <li>Enjoy a filling, nutritious breakfast!</li>
        </ol>

        <h3>Lunch</h3>
        <img src={lunch} alt="lunch.jpg" style={{ width: '50%', height: '50' }} />
        <p>For lunch, opt for a lean protein with veggies.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>Grilled chicken breast</li>
          <li>Mixed greens</li>
          <li>1 tbsp olive oil</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Grill the chicken until fully cooked.</li>
          <li>Combine with fresh mixed greens and drizzle with olive oil.</li>
          <li>Serve with a side of steamed vegetables.</li>
        </ol>

        <h3>Dinner</h3>
        <img src={dinner} alt="dinner.jpg" style={{ width: '50%', height: '50' }} />
        <p>A light yet satisfying dinner to end the day.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>1 salmon fillet</li>
          <li>Steamed broccoli</li>
          <li>Quinoa</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Season the salmon fillet and bake at 375°F for 15-20 minutes.</li>
          <li>Steam broccoli until tender.</li>
          <li>Serve with cooked quinoa.</li>
        </ol>
      </div>
    </div>
  );
}

export default DietPlan1;
