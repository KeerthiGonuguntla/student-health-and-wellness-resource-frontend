import React, { useState, useEffect } from 'react';
import './ViewAllStudents.css';
import axios from 'axios';

function ViewAllStudents() {
  const [students, setStudents] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editStudent, setEditStudent] = useState({
    email: '',
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
    age: '',
    password: '',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8081/viewall');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Failed to fetch students. Please try again.');
    }
  };

  const handleDeleteStudent = async (email) => {
    try {
      const response = await axios.delete(`http://localhost:8081/deletestudent`, {
        params: { email },
      });
      if (response.status === 200) {
        alert('Student deleted successfully!');
        fetchStudents();
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student. Please try again.');
    }
  };

  const handleEditStudent = (student) => {
    setEditStudent(student);
    setEditModalOpen(true); // Open the edit modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateStudent = async () => {
    try {
      const response = await axios.put('http://localhost:8081/update', editStudent);
      if (response.status === 200) {
        alert('Student updated successfully!');
        fetchStudents();
        setEditModalOpen(false); // Close the modal
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student. Please try again.');
    }
  };

  return (
    <div className="view-all-students">
      <h1>View All Students</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.email}>
              <td>{student.email}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>
                <button onClick={() => handleEditStudent(student)}>Edit</button>
                <button onClick={() => handleDeleteStudent(student.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Student</h2>
            <form>
              <input
                type="email"
                name="email"
                value={editStudent.email}
                disabled // Email should not be editable
              />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={editStudent.firstname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={editStudent.lastname}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dob"
                value={editStudent.dob}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={editStudent.address}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={editStudent.age}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={editStudent.password}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleUpdateStudent}>
                Update
              </button>
              <button type="button" onClick={() => setEditModalOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewAllStudents;
