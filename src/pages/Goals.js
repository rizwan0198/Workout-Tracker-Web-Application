// src/pages/Goals.js
import React from 'react';
import './Goals.css';
const Goals = ({ workouts }) => {
  const total = workouts.length;
  const completed = workouts.filter(w => w.status === 'Completed').length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="goals-page">
      <h2>Workout Goals</h2>
      {total === 0 ? (
        <p>No workouts added yet. Add a workout to see your progress.</p>
      ) : (
        <div className="goal-stats">
          <p>Total Workouts: {total}</p>
          <p>Completed: {completed}</p>
          <p>Progress: {progress}%</p>
        </div>
      )}
    </div>
  );
};

export default Goals;
