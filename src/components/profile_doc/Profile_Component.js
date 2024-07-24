import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './profile.css';
const DoctorProfile = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const reviews = [
    {
      acr: 'JS',
      patientName: 'Jane Smith',
      date: '2023-07-09',
      text: 'Excellent care and attention.',
      rating: '★★★★★'
    },
    {
      acr: 'JB',
      patientName: 'John Brown',
      date: '2023-07-08',
      text: 'Very professional and kind.',
      rating: '★★★★☆'
    },
    {
      acr: 'JB',
      patientName: 'John Brown',
      date: '2023-07-08',
      text: 'Very professional and kind.',
      rating: '★★★★☆'
    }
    // Add more reviews as needed
  ];
  return (
    <div className="profile_container">
      <div className="profile_box">
        <div className='profile-img-detail'>
          <div class="profile-pic">
            <img src="/image/doc1.png" alt="Profile Picture" />
          </div>
          <div className="profile_details">
            <div>
              <h2 className="profile_name">Mike John</h2>
              <p className="profile_specialization"><span>Specialization:</span>  General Physician</p>
              <p className="profile_address"><span>Location:</span>  address4252hj</p>
              <p className="profile_email"><span>E-mail:</span>  doctor@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="profile_actions">
          <button className="profile_button book_now">Book Appointment</button>
          <button className="profile_button add_review">Add Review</button>
        </div>
      </div>
      <div className='profile_half'>
        <div className="profile_about_section">
          <h3>About</h3>
          <p className="profile_description">
            Dr. XYZ is a highly esteemed general physician renowned for his comprehensive approach to patient care. With over 15 years of experience, he has earned a reputation for his compassionate demeanor and meticulous attention to detail. Dr. XYZ graduated from a prestigious medical school and completed his residency at a top-tier hospital, where he honed his skills in diagnosing and treating a wide range of medical conditions. His expertise spans from managing chronic illnesses such as diabetes and hypertension to providing acute care for common ailments like colds and infections. Patients admire Dr. XYZ for his ability to listen attentively and explain complex medical information in an understandable manner. He emphasizes preventive care and encourages a holistic approach to health, often integrating lifestyle modifications with medical treatments. Dr. XYZ is also known for his commitment to staying updated with the latest advancements in medicine, regularly attending professional conferences and participating in continuing education. Outside of his clinical duties, he actively engages in community health initiatives and volunteers his time at local health fairs. Dr. XYZ's dedication to his patients and his community makes him a trusted and beloved figure in the healthcare field.
          </p>
        </div>
        <div className="card-slider">
          <h3>Patient Reviews</h3>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="profile_review_card">
                  <div className="review_top">
                    <div className='review_acr'>
                      <span className='acr_content'>{review.acr}</span>
                    </div>
                    <div className='review_name'>
                      <h4>{review.patientName}</h4>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <p>{review.text}</p>
                  {review.rating && <p>Rating:<span className='star'> {review.rating}</span></p>}
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
