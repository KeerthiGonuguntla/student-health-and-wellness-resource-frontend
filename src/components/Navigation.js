import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/fitness">Fitness</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li>
        <li><Link to="/wellness">Wellness</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
