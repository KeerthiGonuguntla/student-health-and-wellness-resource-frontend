import React, { useState } from 'react';
import './SignUpPage.css';
import image6 from '../assests/images/image6.jpeg'  // Import CSS for signup

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Account created!');
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1>Create a New Account</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-field">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input-field">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="image-container">
      <img src={image6} alt="Wellness" className="signup-image" />
  
      </div>
    </div>
  );
}

export default SignUpPage;
