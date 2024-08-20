import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './profile.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [bookingDate, setBookingDate] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {

    axios.get(`http://localhost:8000/api/doctor/${id}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor!', error);
      });


    axios.get(`http://localhost:8000/api/doctor/${id}/reviews/`)
      .then(response => {
        console.log('Reviews data:', response.data);
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, [id]);

  const handleBooking = () => {
    const token = localStorage.getItem('token');
    if (!bookingDate) {
      alert('Please select a date to book an appointment');
      return;
    }
    const localDate = new Date(bookingDate.getTime() - bookingDate.getTimezoneOffset() * 60000)
      .toISOString().split('T')[0];

    axios.post(`http://localhost:8000/api/book_appointment/${id}/`, {
      patient_id: localStorage.getItem('id'),
      date: localDate,
    }, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(response => {
        alert(`Appointment booked! Your booking number is ${response.data.booking_number}`);
      })
      .catch(error => {
        alert('Error booking appointment');
      });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.post(`http://localhost:8000/api/doctor/${id}/reviews/`, {
      review_text: reviewText,
      rating: rating,
    }, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(response => {
        alert('Review submitted successfully');
        setReviews([...reviews, response.data]);
        setReviewText('');
        setRating(0);
      })
      .catch(error => {
        alert('Error submitting review');
      });
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="profile_container">
      <div className="profile_box">
        <div className='profile-img-detail'>
          <div className="profile-pic">
            <img src="/image/doc1.png" alt="Profile Picture" />
          </div>
          <div className="profile_details">
            <div>
              <h2 className="profile_name">{doctor.user.username}</h2>
              <p className="profile_specialization"><span>Specialization:</span> {doctor.specialization}</p>
              <p className="profile_address"><span>Location:</span> {doctor.city}</p>
              <p className="profile_email"><span>E-mail:</span> doctor@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="profile_actions">
          <DatePicker
            selected={bookingDate}
            onChange={date => setBookingDate(date)}
            dateFormat="yyyy-MM-dd"
            className="date-picker"
            placeholderText="Select a date"
          />
          <button className="profile_button book_now" onClick={handleBooking}>Book Appointment</button>
        </div>
      </div>
      <div className='profile_half'>
        <div className="profile_about_section">
          <h3>About</h3>
          <p className="profile_description">
            {doctor.description}
          </p>
        </div>
        <div className="card-slider">
          <h3>Patient Reviews</h3>
          <form onSubmit={handleReviewSubmit} className="review_form">
            <div>
              <label htmlFor="rating">Rating: </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="0">Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label htmlFor="reviewText">Review: </label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="review_textarea"
              />
            </div>
            <button type="submit" className="profile_button">Add Review</button>
          </form>
          {reviews.length > 0 ? (
            <Swiper spaceBetween={30} slidesPerView={3} centeredSlides={true}>
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="review-card">
                    <div className="review-header">
                      <h3>{review.patient_name}</h3>
                      <span>{review.date}</span>
                    </div>
                    <div className="review-rating">
                      Rating: {review.rating}
                    </div>
                    <div className="review-content">
                      {review.review_text}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
