import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import axios from 'axios';
import nutrition from '../assests/images/nutrition.jpeg';
import mentalhealth from '../assests/images/mentalhealth.jpeg';
import fitness from '../assests/images/fitness.jpeg';

function AdminPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [studentData, setStudentData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
    age: '',
    password: '',
  });

  // Open Add Student Modal
  const handleAddStudent = () => {
    setShowModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setStudentData({
      email: '',
      firstname: '',
      lastname: '',
      dob: '',
      address: '',
      age: '',
      password: '',
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Submit Add Student Form
 

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://springbootsdpdeploy.up.railway.app/addstudent', studentData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        alert('Student added successfully!');
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Failed to add student. Please try again.');
    }
  };
  

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Dashboard: Student Health and Wellness</h1>
        <nav>
          <a href="#add-event" onClick={handleAddStudent}>
            Add Student
          </a>
          &nbsp;
          &nbsp;
          <a href=""onClick={() => navigate('/viewallstudents')}>
            View All Students
          </a>
        </nav>
      </header>

      <section className="modules">
        <div className="module">
          <img src={nutrition} alt="Nutrition" className="module-image" />
          <div className="module-info">
            <h2>Nutrition</h2>
            <p>Access information about healthy eating, balanced diets, and meal plans for students.</p>
          </div>
        </div>

        <div className="module">
          <img src={mentalhealth} alt="Mental Health" className="module-image" />
          <div className="module-info">
            <h2>Mental Health</h2>
            <p>Find mental health support resources, including counseling services and stress management tools.</p>
          </div>
        </div>

        <div className="module">
          <img src={fitness} alt="Fitness" className="module-image" />
          <div className="module-info">
            <h2>Fitness</h2>
            <p>Explore various fitness programs, workout routines, and physical wellness tips for students.</p>
          </div>
        </div>
      </section>

      <section className="admin-content">
        <h1>Manage Services</h1>
        <p>Here you can add or delete services related to health and wellness.</p>
      </section>

      {/* Add Student Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Student</h2>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={studentData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={studentData.firstname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={studentData.lastname}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={studentData.dob}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={studentData.address}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={studentData.age}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={studentData.password}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
              <button type="button" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
