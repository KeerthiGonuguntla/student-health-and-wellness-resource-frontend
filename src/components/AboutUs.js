import React from 'react';
import './AboutUs.css'; // Import CSS for AboutUs

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        At Student Health and Wellness, our mission is to empower students
        to lead healthy, balanced lives. We believe that health is a holistic
        concept, encompassing physical, mental, and emotional well-being.
      </p>
      <p>
        We provide a variety of resources, programs, and support services to
        help students navigate their wellness journey. Whether you're looking
        for mental health resources, fitness programs, or nutrition advice,
        we are here to support you.
      </p>
      
      <h2>Our Services</h2>
      <ul>
        <li>Mental Health Support: Counseling services, workshops, and resources to help manage stress and anxiety.</li>
        <li>Nutrition Advice: Personalized meal planning, workshops on healthy eating, and nutritional resources.</li>
        <li>Fitness Programs: Access to fitness classes, workout plans, and personal training services.</li>
      </ul>
      
      <h2>Contact Us</h2>
      <p>If you have any questions or need support, feel free to reach out:</p>
      <p>Email: <a href="mailto:support@studentwellness.com">support@studentwellness.com</a></p>
      <p>Phone: 9876544321</p>
    </div>
  );
};

export default AboutUs;
