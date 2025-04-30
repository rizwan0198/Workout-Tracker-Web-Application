// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ workouts }) => {
  const total = workouts.length;
  const completed = workouts.filter(w => w.status === 'Completed').length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="home-page">
      <h2>Welcome to Your Workout Tracker</h2>

      {total > 0 ? (
        <div className="progress">
          <p>Today's Progress: {progress}%</p>
          <p>Completed: {completed}/{total}</p>
        </div>
      ) : (
        <p>No workouts yet. Add a workout to get started!</p>
      )}

      <div className="home-buttons">
        <Link to="/workouts">
          <button>Add New Workout</button>
        </Link>
        <Link to="/workouts">
          <button>Show Workouts</button>
        </Link>
        <Link to="/goals">
          <button>Show Goals</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
