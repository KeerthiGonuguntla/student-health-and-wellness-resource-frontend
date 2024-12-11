import React from 'react';
import './StudentContent.css'; 
import wellness from '../assests/images/wellness.jpg';
import wellness1 from '../assests/images/wellness1.jpg';
import wellness2 from '../assests/images/wellness2.jpg';
import wellness3 from '../assests/images/wellness3.jpg';
import wellness4 from '../assests/images/wellness4.jpg';

function StudentContent() {
  return (
    <div className="student-content">
      <h1>Explore Our Services</h1>
      <nav className="scroll-nav">
        <ul>
          <li><a href="#wellness">Health and Wellness</a></li>
          <li><a href="#support">Support Services</a></li>
        </ul>
      </nav>

      <div id="wellness">
        <h1>Wellness Programs</h1>
        <div className="services-container">
          <div className="service-box">
            <img src={wellness} alt="Mental Health Support" className="service-image" />
            <h2>Mental Health Support</h2>
            <p>Explore various resources and programs designed to enhance your physical and mental well-being.</p>
            <a href="/mental-health" className="learn-more-button">Learn More</a>
          </div>

          <div className="service-box">
            <img src={wellness1} alt="Fitness Programs" className="service-image" />
            <h2>Fitness Programs</h2>
            <p>Find support services including counseling, academic help, and wellness workshops.</p>
            <a href="/fitness-programs" className="learn-more-button">Learn More</a>
          </div>

          <div className="service-box">
            <img src={wellness2} alt="Nutrition Advice" className="service-image" />
            <h2>Nutrition Advice</h2>
            <p>Helps students make informed decisions about their diet, offering guidance on balanced meals and healthy eating habits for better physical and mental well-being.</p>
            <a href="/nutrition" className="learn-more-button">Learn More</a>
          </div>
        </div>
      </div>

      <div id="support">
        <h1>Support Services</h1>
        <div className="services-container">
          <div className="service-box">
            <img src={wellness3} alt="Academic Support" className="service-image" />
            <h2>Academic Support</h2>
            <p>Offers assistance with academic challenges, helping students develop effective study habits, time management skills, and strategies to improve academic performance.</p>
            <a href="/AcademicSupport" className="learn-more-button">Learn More</a>
          </div>

          <div className="service-box">
            <img src={wellness4} alt="Counseling" className="service-image" />
            <h2>Counseling</h2>
            <p>Provides professional support for students dealing with personal, emotional, or academic issues. Counseling helps students navigate challenges and improve their mental resilience.</p>
            <a href="/CounselingServices" className="learn-more-button">Learn More</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Student Health and Wellness. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StudentContent;
