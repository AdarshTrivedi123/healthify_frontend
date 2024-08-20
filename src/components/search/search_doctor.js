import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './search_doctor.css';

const SearchDoctorPage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [searchSpecialization, setSearchSpecialization] = useState('');
  const [specializations] = useState(['General Physician', 'Pediatrician', 'Cardiologist']);

  useEffect(() => {
    // Fetch the initial doctor data
    axios.get('http://127.0.0.1:8000/api/doctors/')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);

  const handleSearch = () => {
    const params = {};
    if (searchCity) {
      params.city = searchCity;
    }
    if (searchSpecialization) {
      params.specialization = searchSpecialization;
    }

    axios.get('http://localhost:8000/api/filter/doctor/', { params })
      .then(response => {
        setSearchResult(response.data);
        setRenderSearch(true)
      })
      .catch(error => {
        console.error('There was an error filtering the doctors!', error);
      });
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a general physician?",
      answer: "A general physician is a doctor who treats acute and chronic illnesses and provides preventive care and health education.",
    },
    {
      question: "What is a pediatrician?",
      answer: "A pediatrician is a medical doctor who manages the physical, behavioral, and mental health of children from birth until age 18.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website or by calling our customer service.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "You should bring your ID, insurance card, and any relevant medical records.",
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans. Please contact our office for more details.",
    },
  ];

  return (
    <div className="search-doctor-page">
      <div className="search-filters">
        <input
          type="text"
          className="search-input"
          placeholder="Filter based on City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <select
          className="search-input"
          value={searchSpecialization}
          onChange={(e) => setSearchSpecialization(e.target.value)}
        >
          {/* <option value="">Filter based on Specialization</option> */}
          {specializations.map((specialization, index) => (
            <option key={index} value={specialization}>{specialization}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {renderSearch ? (
        <div className="doctor-section">
          <h2 className="searchtype_heading">Search Results</h2>
          <div className="doctor-cards">
            {searchResult.map((doctor, index) => (
              <div className="doctor-card-wrap" key={index}>
                <div className="doctor-card">
                  <div className='name'>{doctor.user.username}</div>
                  <div className='specialization'>{doctor.specialization}</div>
                  <div className='specialization'>{doctor.city}</div>
                  <div className='description'>{doctor.description}</div>
                </div>
                <button className="doctor-card-button"><a href={`/doctor/${doctor.id}`}>View Profile</a></button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="doctor-section">
            <h2 className="searchtype_heading">General Physicians</h2>
            <div className="doctor-cards">
              {doctors.filter(doctor => doctor.specialization.toLowerCase() === 'general physician').map((doctor, index) => (
                <div className="doctor-card-wrap" key={index}>
                  <div className="doctor-card">
                    <div className='name'>{doctor.user.username}</div>
                    <div className='specialization'>{doctor.specialization}</div>
                    <div className='specialization'>{doctor.city}</div>
                    <div className='description'>{doctor.description}</div>
                  </div>
                  <button className="doctor-card-button"><a href={`/doctor/${doctor.id}`}>View Profile</a></button>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="doctor-section">
            <h2 className="searchtype_heading">Pediatricians</h2>
            <div className="doctor-cards">
              {doctors.filter(doctor => doctor.specialization.toLowerCase() === 'pediatrician').map((doctor, index) => (
                <div className="doctor-card-wrap" key={index}>
                  <div className="doctor-card">
                    <div className='name'>{doctor.user.username}</div>
                    <div className='specialization'>{doctor.specialization}</div>
                    <div className='specialization'>{doctor.city}</div>
                    <div className='description'>{doctor.description}</div>
                  </div>
                  <button className="doctor-card-button"><a href={`/doctor/${doctor.id}`}>View Profile</a></button>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      )}

      <div className="faq-section">
        <h2>FAQ</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
              <span className="dropdown-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDoctorPage;
