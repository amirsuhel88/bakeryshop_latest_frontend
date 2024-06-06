import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Hero.css'; // Import custom styles
import image1 from '../../../assets/data/images/image1.jpg';
import image2 from '../../../assets/data/images/image2.jpg';
import image3 from '../../../assets/data/images/image3.jpg';

function HeroSection() {
  return (
    <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Product 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Product</h5>
            <p>Description for first product.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Product 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Product</h5>
            <p>Description for second product.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Product 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Product</h5>
            <p>Description for third product.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
