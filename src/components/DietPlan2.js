import React from 'react';
import muscle_breakfast from '../assests/images/muscle_breakfast.jpg' // Replace with your actual image path
import muscle_lunch from '../assests/images/muscle_lunch.jpg'; // Replace with your actual image path
import muscle_dinner from '../assests/images/muscle_dinner.jpg'; // Replace with your actual image path

function DietPlan2() {
  return (
    <div>
      <h1>Muscle Gain Diet Plan</h1>
      <p>This muscle gain plan includes high-protein meals to help you build muscle and strength.</p>

      <div className="meal-section">
        <h2>Day 1</h2>
        <h3>Breakfast</h3>
        <img src={muscle_breakfast} alt="muscle_breakfast" style={{ width: '50%', height: '50' }} />
        <p>Power up your morning with protein-packed scrambled eggs.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>4 eggs</li>
          <li>1/2 cup spinach</li>
          <li>1 tbsp olive oil</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Scramble eggs in a pan with olive oil.</li>
          <li>Add spinach and cook until wilted.</li>
          <li>Serve with whole-grain toast.</li>
        </ol>

        <h3>Lunch</h3>
        <img src={muscle_lunch} alt="muscle_lunch" style={{ width: '50%', height: '50' }} />
        <p>High-protein chicken with quinoa for sustained energy.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>Grilled chicken breast</li>
          <li>1 cup cooked quinoa</li>
          <li>1/2 avocado</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Grill chicken until fully cooked.</li>
          <li>Serve with cooked quinoa and sliced avocado.</li>
        </ol>

        <h3>Dinner</h3>
        <img src={muscle_dinner} alt="muscle_dinner" style={{ width: '50%', height: '50' }} />
        <p>End your day with lean protein and complex carbs.</p>
        <h4>Ingredients:</h4>
        <ul>
          <li>Grilled turkey breast</li>
          <li>Sweet potato</li>
          <li>Steamed green beans</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Grill turkey breast until cooked through.</li>
          <li>Bake sweet potato in the oven at 400°F for 45 minutes.</li>
          <li>Steam green beans and serve with the meal.</li>
        </ol>
      </div>
    </div>
  );
}

export default DietPlan2;
