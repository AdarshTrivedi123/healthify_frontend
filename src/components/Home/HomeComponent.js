import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Your Health, Our Priority</h1>
            <p>Book appointments, shop medical items, and join our community.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Hero Image" />
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <div className="feature-content">
              <h2>Book Appointments Online</h2>
              <p>Easily book appointments with trusted doctors in your city through our platform.
                Use our search tool to find local doctors by specialty, ratings, and availability.
                Each doctor’s profile includes qualifications, experience, and patient reviews, helping you make informed decisions. Enjoy the convenience of online booking with instant confirmations and reminders. Your health and privacy are our top priorities, ensuring a seamless and secure experience.</p>
              <button className="feature-button">Book Now</button>
            </div>
            <div className="feature-image">
              <img src="/image/appointment.jpeg" alt="Book Appointments" />
            </div>
          </div>
          <div className="feature">
            <div className="feature-image">
              <img src="/image/shop.jpeg" alt="Shop Medical Items" />
            </div>
            <div className="feature-content">
              <h2>Shop Medical Items</h2>
              <p>Easily book appointments with trusted doctors in your city through our platform.
                Use our search tool to find local doctors by specialty, ratings, and availability.
                Each doctor’s profile includes qualifications, experience, and patient reviews, helping you make informed decisions. Enjoy the convenience of online booking with instant confirmations and reminders. Your health and privacy are our top priorities, ensuring a seamless and secure experience.</p>
              <button className="feature-button">Shop Now</button>
            </div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <h2>Join Our Community</h2>
              <p>Easily book appointments with trusted doctors in your city through our platform.
                Use our search tool to find local doctors by specialty, ratings, and availability.
                Each doctor’s profile includes qualifications, experience, and patient reviews, helping you make informed decisions. Enjoy the convenience of online booking with instant confirmations and reminders. Your health and privacy are our top priorities, ensuring a seamless and secure experience.</p>
              <button className="feature-button">Join Now</button>
            </div>
            <div className="feature-image">
              <img src="/image/community.jpg" alt="Join Our Community" />
            </div>
          </div>
        </section>
        <section className="about-us">
          <p>
            <h2>About Us</h2>
            Welcome to HealthCare, your trusted partner in health and wellness. Our mission is to provide a comprehensive online platform where you can book appointments with top doctors, shop for essential medical items, and connect with a vibrant community of patients and healthcare professionals.
            Easily book appointments with trusted doctors in your city through our platform.
                Use our search tool to find local doctors by specialty, ratings, and availability.
                Each doctor’s profile includes qualifications, experience, and patient reviews, helping you make informed decisions. Enjoy the convenience of online booking with instant confirmations and reminders. Your health and privacy are our top priorities, ensuring a seamless and secure experience.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
