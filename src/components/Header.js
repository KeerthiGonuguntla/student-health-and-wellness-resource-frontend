import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, logout }) {
  return (
    <header>
      <h1>Student Health & Wellness Resources</h1>
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              <li><Link to="/nutrition">Nutrition</Link></li>
              <li><Link to="/fitness">Fitness</Link></li>
              <li><Link to="/mental-health">Mental Health</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
