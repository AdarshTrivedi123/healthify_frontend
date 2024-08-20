import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <div className='home-hero-wrap'>
            <div className='home-hero-pattern1'>
                <svg id='patternId2' width='96' height='96' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='16' height='16' patternTransform='scale(1.2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' stroke-width='1' stroke='none' fill='hsla(199, 58%, 91%, 1)' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' /></svg>
            </div>
            <div className='home-hero-pattern2'>
                <svg id='patternId' width='160' height='160' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='16' height='16' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)' /><path d='M10 15a5 5 0 110-10 5 5 0 010 10z' stroke-width='1' stroke='hsla(199, 100%, 90%, 1)' fill='none' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' /></svg>
            </div>
            <div className='home-hero'>
                <div className='home-hero-text'>
                    <h1>We&apos;re <span>determined</span> for your <span>better life.</span></h1>
                    <p>You can get the care you need 24/7 – be it online or in person. You will be treated by caring specialist doctors.</p>
                    <button>Book Appointment</button>
                </div>
                <img src="/image/family.png" alt="" />
            </div>
        </div>
        {/* <section className="hero">
          <div className="hero-content">
            <h1>Your Health, Our Priority</h1>
            <p>Book appointments, shop medical items, and join our community.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Hero Image" />
          </div>
        </section> */}
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
    </div>
  );
};

export default Home;
