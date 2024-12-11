import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 
import image2 from '../assests/images/image2.jpg'
import image3 from '../assests/images/image3.jpg';
import image4 from '../assests/images/image4.jpeg';

const backgroundImages = [image2,image3,image4];
  



function LandingPage() {
    // State for scroll to top button visibility
    const [showScroll, setShowScroll] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
  
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();  // React Router's navigation hook

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/about');  // Redirect to '/about' route on form submission
  };

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
      <header className="navbar">
        <div className="logo">Student Health and Wellness</div>
        
        <nav>
          <ul>
            <li><a href="Admin">Admin</a></li>
            <li><a href="Student">Student</a></li>
           
            <li><a href="/login" className="login-button">Login</a></li>
            <li><a href="/signup" className="signup-button">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Your Health, Your Wellness, Your Way</h1>
        <p>Find the support you need for a balanced, healthy lifestyle.</p>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Get Started</button>
        </form>
      </section>
       {/* Scroll to Top Button */}
       {showScroll && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
      
<div className="health-images">
<img src={image2} alt="Mental Health Support" />
<img src={image3} alt="Nutrition Advice" />
<img src={image4} alt="Fitness Programs" />
</div>


   

      <footer className="cookies-banner">
        <p>We use cookies to ensure you get the best experience on our website. <a href="/cookies">Learn more</a></p>
        <button>Allow All</button>
      </footer>
    </div>
  );
}

export default LandingPage;
