// src/pages/AddWorkout.js
import React, { useState } from 'react';
import './AddWorkout.css';

const AddWorkout = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    duration: '',
    date: ''
  });
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // toggle state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.duration || !form.date) {
      setMessage('All fields are required!');
      return;
    }

    setMessage('Workout added successfully! ✅');
    setForm({ name: '', type: '', duration: '', date: '' });
    setShowForm(false); // hide form after submit
  };

  return (
    <div className="add-workout-page">
      <h2>Add a New Workout</h2>
      <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Workout'}
      </button>

      {message && <p className="success-msg">{message}</p>}

      {showForm && (
        <form className="workout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Workout Name:</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <input name="type" value={form.type} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Duration (minutes):</label>
            <input name="duration" type="number" value={form.duration} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-btn">Add Workout</button>
        </form>
      )}
    </div>
  );
};

export default AddWorkout;
