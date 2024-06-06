import React from "react";
import '../../assets/data/styles/style.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col-6">
            <h4>About Us</h4>
            <ul className="list-unstyled">
            Welcome to our charming bakery shop, where the aroma of freshly baked goods greets you at the door and promises a delightful experience for your senses. Nestled in the heart of [insert location], our bakery is a haven for those who appreciate the craftsmanship and artistry of baking.
            </ul>
          </div>
          {/* comlumn2 */}
          <div className="col-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; Online Bakery Shop --All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
