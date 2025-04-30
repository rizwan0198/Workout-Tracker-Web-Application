// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', age: '', goal: '' });
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
      setIsEditing(false);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={profile.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="goal"
            placeholder="Fitness Goal (e.g. Lose weight)"
            value={profile.goal}
            onChange={handleChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="profile-info">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Goal:</strong> {profile.goal}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
