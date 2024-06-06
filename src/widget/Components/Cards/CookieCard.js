// src/CookieCard.js
import React from 'react';
import './CookieCard.css';

const CookieCard = ({ image }) => {
  return (
    <div className="card mb-4" style={{ borderRadius: '10px' }}>
      <img src={image} className="card-img-top" alt="Cookies" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
      <div className="card-body text-center">
        <h5 className="card-title">Cookies</h5>
        <p className="card-text">cookies are more than just a sweet treat</p>
        <p className="card-text"><strong>Rs. 30</strong></p>
      </div>
    </div>
  );
};

export default CookieCard;
