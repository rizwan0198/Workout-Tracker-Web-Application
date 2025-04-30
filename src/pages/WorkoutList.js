import React, { useState } from 'react';
import './WorkoutList.css';

const WorkoutList = ({ workouts, addWorkout, editWorkout, markAsCompleted, deleteWorkout }) => {
  const [form, setForm] = useState({ name: '', duration: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.duration) return;
    if (isEditing) {
      editWorkout(editId, form);
      setIsEditing(false);
      setEditId(null);
    } else {
      addWorkout(form);
    }
    setForm({ name: '', duration: '' });
  };

  const handleEdit = (workout) => {
    setIsEditing(true);
    setEditId(workout.id);
    setForm({ name: workout.name, duration: workout.duration });
  };

  const handleDelete = (id) => {
    deleteWorkout(id);
  };

  return (
    <div className="workout-list">
      <h2>{isEditing ? 'Edit Workout' : 'Add Workout'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Workout Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 30 mins)"
          value={form.duration}
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>

      <h3>Your Workouts</h3>
      {workouts.length === 0 ? (
        <p>No workouts yet. Add one above!</p>
      ) : (
        <ul>
          {workouts.map(workout => (
            <li key={workout.id}>
              <strong>{workout.name}</strong> {Math.abs(workout.duration)} min [{workout.status}]
              <button onClick={() => handleEdit(workout)}>Edit</button>
              {workout.status === 'Pending' && (
                <button onClick={() => markAsCompleted(workout.id)}>Mark as Completed</button>
              )}
              <button onClick={() => handleDelete(workout.id)}>Delete</button> {/* Delete button */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;
