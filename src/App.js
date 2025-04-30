import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WorkoutList from './pages/WorkoutList';
import Goals from './pages/Goals';
import './App.css';
import Header from './components/Header';

function App() {
  const [profile, setProfile] = useState(null);
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now(), status: 'Pending' }]);
  };
  
  const editWorkout = (id, updatedWorkout) => {
    setWorkouts(
      workouts.map(w => w.id === id ? { ...w, ...updatedWorkout } : w)
    );
  };

  const markAsCompleted = (id) => {
    setWorkouts(
      workouts.map(w => w.id === id ? { ...w, status: 'Completed' } : w)
    );
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(workout => workout.id !== id)); // Remove the workout from the array
  };

  return (
    <Router>
      <Header />
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home workouts={workouts} />} />
            <Route path="/profile" element={<Profile profile={profile} setProfile={setProfile} />} />
            <Route
              path="/workouts"
              element={
                <WorkoutList
                  workouts={workouts}
                  addWorkout={addWorkout}
                  editWorkout={editWorkout}
                  markAsCompleted={markAsCompleted}
                  deleteWorkout={deleteWorkout} // Pass deleteWorkout to WorkoutList
                />
              }
            />
            <Route path="/goals" element={<Goals workouts={workouts} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
