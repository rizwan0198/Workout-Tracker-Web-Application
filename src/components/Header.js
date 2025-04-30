// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      backgroundColor: '#1D1F2F',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      minHeight: '60px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Link to="/" style={{
        color: '#fff',
        fontSize: '24px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Workout Tracker
      </Link>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/workouts" style={linkStyle}>Workouts</Link>
        <Link to="/goals" style={linkStyle}>Goals</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  marginLeft: '20px',
  padding: '8px 12px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease'
};

export default Header;
