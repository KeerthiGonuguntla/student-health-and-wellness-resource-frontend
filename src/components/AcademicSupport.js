import React, { useState } from 'react';
import './AcademicSupport.css';

function AcademicSupportPage() {
  const [activeModule, setActiveModule] = useState('ExamPrep');
  const [bookedExams, setBookedExams] = useState([]);
  const [bookedSessions, setBookedSessions] = useState([]);  // Track booked tutoring sessions
  const [openedExam, setOpenedExam] = useState(null);

  const availableExams = [
    {
      id: 1,
      name: 'Algebra Exam',
      description: 'Test your skills in Algebra with this comprehensive exam.',
      questions: [
        'What is the solution to x + 3 = 5?',
        'Solve for x: 2x - 7 = 9.',
        'What is the value of x in the equation 3x + 4 = 19?',
      ],
    },
    {
      id: 2,
      name: 'Physics Exam',
      description: 'Challenge yourself with questions on fundamental physics concepts.',
      questions: [
        'State Newton\'s Second Law of Motion.',
        'What is the SI unit of force?',
        'Explain the concept of momentum.',
      ],
    },
  ];

  const availableTutors = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      description: 'Experienced math tutor specializing in Algebra and Calculus.',
      availableTimes: ['Monday 3:00 PM', 'Wednesday 10:00 AM'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'Physics',
      description: 'Expert tutor in Physics with experience in high school and university-level subjects.',
      availableTimes: ['Tuesday 2:00 PM', 'Thursday 4:00 PM'],
    },
  ];

  const bookExam = (exam) => {
    if (!bookedExams.find((e) => e.id === exam.id)) {
      setBookedExams((prev) => [...prev, exam]);
      alert(`You have successfully booked the exam: "${exam.name}"`);
    } else {
      alert(`You have already booked the exam: "${exam.name}"`);
    }
  };

  const bookSession = (tutor) => {
    setBookedSessions((prev) => [...prev, tutor]);
    alert(`You have successfully booked a session with ${tutor.name}`);
  };

  const openExam = (exam) => {
    setOpenedExam(exam);
  };

  const renderExamPrepContent = () => (
    <div className="module-content">
      <h2>Exam Preparation</h2>
      <h3>Available Exams</h3>
      <div className="class-list">
        {availableExams.map((exam) => (
          <div key={exam.id} className="class-card">
            <h4>{exam.name}</h4>
            <p>{exam.description}</p>
            <button className="enroll-button" onClick={() => bookExam(exam)}>
              Book Exam
            </button>
          </div>
        ))}
      </div>
      <h3>Your Booked Exams</h3>
      {bookedExams.length > 0 ? (
        <ul className="booked-classes-list">
          {bookedExams.map((exam) => (
            <li key={exam.id}>
              <strong>{exam.name}</strong>
              <button className="open-exam-button" onClick={() => openExam(exam)}>
                Open Exam
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not booked any exams yet.</p>
      )}
      {openedExam && (
        <div className="exam-questions">
          <h3>{openedExam.name} - Questions</h3>
          <ul>
            {openedExam.questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderTutoringContent = () => (
    <div className="module-content">
      <h2>Tutoring Sessions</h2>
      <h3>Available Tutors</h3>
      <div className="class-list">
        {availableTutors.map((tutor) => (
          <div key={tutor.id} className="class-card">
            <h4>{tutor.name}</h4>
            <p>{tutor.subject}</p>
            <p>{tutor.description}</p>
            <h5>Available Times:</h5>
            <ul>
              {tutor.availableTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
            <button className="enroll-button" onClick={() => bookSession(tutor)}>
              Book Session
            </button>
          </div>
        ))}
      </div>
      <h3>Your Booked Sessions</h3>
      {bookedSessions.length > 0 ? (
        <ul className="booked-classes-list">
          {bookedSessions.map((tutor, index) => (
            <li key={index}>
              <strong>{tutor.name}</strong> - {tutor.subject}
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not booked any tutoring sessions yet.</p>
      )}
    </div>
  );

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'ExamPrep':
        return renderExamPrepContent();
      case 'Tutoring':
        return renderTutoringContent();
      default:
        return (
          <div className="module-content">
            <h2>Welcome to Academic Support</h2>
            <p>Select a module to start overcoming your challenges.</p>
          </div>
        );
    }
  };

  return (
    <div className="academic-support">
      <h1>Academic Support</h1>
      <p>Overcome your academic challenges with our structured support system.</p>
      <div className="tabs">
        <button
          onClick={() => setActiveModule('ExamPrep')}
          className={activeModule === 'ExamPrep' ? 'active-tab' : ''}
        >
          Exam Preparation
        </button>
        <button
          onClick={() => setActiveModule('Tutoring')}
          className={activeModule === 'Tutoring' ? 'active-tab' : ''}
        >
          Tutoring Sessions
        </button>
      </div>
      {renderModuleContent()}
    </div>
  );
}

export default AcademicSupportPage;
