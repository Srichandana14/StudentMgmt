import React from 'react';
import './Home.css'; // Ensure to create and include a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Welcome to the Payment System</h1>
        {/* Introductory section */}
        <div className="intro-content">
          <h2>Track Your Payments with Ease</h2>
          <p>Our system allows you to make and track payments seamlessly.</p>
          <a href="/payments" className="cta-button">Make a Payment</a>
        </div>
      </section>

      {/* Add more sections as needed */}
      <section className="feature-section">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Details about feature 1.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Details about feature 2.</p>
        </div>
        {/* Add more features as needed */}
      </section>
    </div>
  );
}

export default Home;
