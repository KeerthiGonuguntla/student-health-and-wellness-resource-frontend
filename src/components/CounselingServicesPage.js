import React, { useState } from 'react';
import './CounselingServices.css';

const counselors = [
  {
    id: 1,
    name: 'Dr. Emily Johnson',
    expertise: 'Stress and Anxiety Management',
    availableClasses: [
      { id: 101, topic: 'Overcoming Stress', date: '2024-12-15', time: '10:00 AM' },
      { id: 102, topic: 'Dealing with Anxiety', date: '2024-12-20', time: '2:00 PM' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Michael Smith',
    expertise: 'Relationship Counseling',
    availableClasses: [
      { id: 103, topic: 'Improving Communication', date: '2024-12-18', time: '11:00 AM' },
      { id: 104, topic: 'Conflict Resolution', date: '2024-12-22', time: '4:00 PM' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Sarah Lee',
    expertise: 'Building Resilience',
    availableClasses: [
      { id: 105, topic: 'Building Emotional Resilience', date: '2024-12-19', time: '3:00 PM' },
      { id: 106, topic: 'Coping with Change', date: '2024-12-25', time: '5:00 PM' },
    ],
  },
];

function CounselingGroupsWithClasses() {
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [bookedClass, setBookedClass] = useState(null);

  const handleBookClass = (classInfo) => {
    setBookedClass(classInfo);
    alert(`You have successfully booked the class: "${classInfo.topic}" with ${selectedCounselor.name}`);
  };

  return (
    <div className="counseling-groups">
      <h1>Counseling Groups and Classes</h1>
      <p>Explore counseling sessions and book classes to improve your mental health.</p>

      <div className="counselor-list">
        {counselors.map((counselor) => (
          <div
            key={counselor.id}
            className="counselor-card"
            onClick={() => setSelectedCounselor(counselor)}
          >
            <h2>{counselor.name}</h2>
            <p><strong>Expertise:</strong> {counselor.expertise}</p>
            <button className="view-classes-button">View Classes</button>
          </div>
        ))}
      </div>

      {selectedCounselor && (
        <div className="class-booking">
          <h2>Classes by {selectedCounselor.name}</h2>
          <p><strong>Expertise:</strong> {selectedCounselor.expertise}</p>
          <div className="class-list">
            {selectedCounselor.availableClasses.map((classInfo) => (
              <div key={classInfo.id} className="class-card">
                <h3>{classInfo.topic}</h3>
                <p><strong>Date:</strong> {classInfo.date}</p>
                <p><strong>Time:</strong> {classInfo.time}</p>
                <button
                  className="book-class-button"
                  onClick={() => handleBookClass(classInfo)}
                >
                  Book Class
                </button>
              </div>
            ))}
          </div>
          <button className="close-button" onClick={() => setSelectedCounselor(null)}>
            Close
          </button>
        </div>
      )}

      {bookedClass && (
        <div className="confirmation">
          <h2>Booking Confirmation</h2>
          <p>You have booked the class: <strong>{bookedClass.topic}</strong></p>
          <p>With Counselor: <strong>{selectedCounselor.name}</strong></p>
          <p>On: <strong>{bookedClass.date}</strong> at <strong>{bookedClass.time}</strong></p>
        </div>
      )}
    </div>
  );
}

export default CounselingGroupsWithClasses;
